import { AxiosError } from 'axios'
import { useCallback, useId, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { ICpf } from '../interfaces'
import { CpfServices } from '../services/CpfServices'
import { cpfHelper } from '../utils/cpfHelpers'

export type StoreCpfProps = {
  id?: number
  value: string
}

export type SortType = 'asc' | 'desc'

export const useCpf = () => {
  const [cpfs, setCpfs] = useState<ICpf[]>([])
  const toastGetCpfsId = useId()
  const [sortCpf, setSortCpf] = useState<SortType>('asc')
  const filter = useRef<string>('')

  const setFilterCpf = (input:string) => { filter.current = input }
  const getCpfs = useCallback(async () => {
    toast.loading('Loading CPFs...', { toastId: toastGetCpfsId })
    try {
      const { data } = await CpfServices.list(filter.current, sortCpf)
      setCpfs(data)
      toast.update(toastGetCpfsId, { type: 'success', autoClose: 1000, closeOnClick: true, isLoading: false })
    } catch (error) {
      toast.update(toastGetCpfsId, { type: 'error', render: 'Error on loading cpfs', isLoading: false, closeOnClick: true, autoClose: 8000 })
      toast.dismiss(toastGetCpfsId)
    }
  }, [filter, sortCpf, toastGetCpfsId])

  const getCpfById = useCallback((id: number):ICpf => {
    const defaultCpf = { id: 0, value: '' }
    const found = cpfs.find(el => el.id === id)
    return found || defaultCpf
  }, [cpfs])

  const storeCpf = useCallback(async ({ id, value }:StoreCpfProps) => {
    const toastId = toast.loading('Saving CPF...', { closeOnClick: true })
    try {
      if (id && id > 0) {
        await CpfServices.update({ id, value })
      } else {
        await CpfServices.create(value)
      }
      toast.update(toastId, { isLoading: false, autoClose: 2000, type: 'info', render: 'CPF saved!' })
      await getCpfs()
    } catch (error) {
      const defaultErrorMessage = 'Could not write cpf'
      if (error instanceof AxiosError) {
        const { response } = error
        const errorMessage = response?.data.error.message || defaultErrorMessage
        toast.update(toastId, { isLoading: false, autoClose: 5000, type: 'warning', render: errorMessage })
        return
      }
      toast.update(toastId, { isLoading: false, autoClose: 5000, type: 'error', render: 'Could not write cpf' })
    }
  }, [getCpfs])

  const removeCpf = useCallback(async (id: number) => {
    const toastId = toast.loading('Remove CPF...', { closeOnClick: true })
    try {
      if (!id) return
      const cpfToRemove = getCpfById(id)
      await CpfServices.remove(id)

      toast.update(toastId, { isLoading: false, autoClose: 2000, type: 'info', render: `CPF: ${cpfHelper.format(cpfToRemove.value)} successfully removed.` })
      await getCpfs()
    } catch (error) {
      const defaultErrorMessage = 'Could not remove cpf'
      if (error instanceof AxiosError) {
        const { response } = error
        const errorMessage = response?.data.error.message || defaultErrorMessage
        toast.update(toastId, { isLoading: false, autoClose: 5000, type: 'warning', render: errorMessage })
        return
      }
      toast.update(toastId, { isLoading: false, autoClose: 5000, type: 'error', render: defaultErrorMessage })
    }
  }, [getCpfById, getCpfs])

  return {
    cpfs,
    getCpfs,
    getCpfById,
    storeCpf,
    removeCpf,
    sortCpf,
    setSortCpf,
    filter,
    setFilterCpf
  }
}
