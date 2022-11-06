import { AxiosError } from 'axios'
import { useCallback, useId, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { ICnpj } from '../interfaces'
import { CnpjServices } from '../services/CnpjServices'
import { cnpjHelper } from '../utils/cnpjHelpers'

export type StoreCnpjProps = {
  id?: number
  value: string
}

export type SortType = 'asc' | 'desc'

export const useCnpj = () => {
  const [cnpjs, setCnpjs] = useState<ICnpj[]>([])
  const toastGetCnpjId = useId()
  const [sortCnpj, setSortCnpj] = useState<SortType>('asc')
  const filter = useRef<string>('')

  const setFilterCnpj = (input:string) => { filter.current = input }

  const getCnpjs = useCallback(async () => {
    toast.loading('Loading CNPJs...', { toastId: toastGetCnpjId })
    try {
      const { data } = await CnpjServices.list(filter.current, sortCnpj)
      setCnpjs(data)
      toast.update(toastGetCnpjId, { type: 'success', autoClose: 1000, closeOnClick: true, isLoading: false })
    } catch (error) {
      toast.update(toastGetCnpjId, { type: 'error', render: 'Error on loading cnpjs', isLoading: false, closeOnClick: true, autoClose: 8000 })
      toast.dismiss(toastGetCnpjId)
    }
  }, [filter, sortCnpj, toastGetCnpjId])

  const getCnpjById = useCallback((id: number):ICnpj => {
    const defaultCnpj = { id: 0, value: '' }
    const found = cnpjs.find(el => el.id === id)
    return found || defaultCnpj
  }, [cnpjs])

  const storeCnpj = useCallback(async ({ id, value }:StoreCnpjProps) => {
    const toastId = toast.loading('Saving CNPJ...', { closeOnClick: true })
    try {
      if (id && id > 0) {
        await CnpjServices.update({ id, value })
      } else {
        await CnpjServices.create(value)
      }
      toast.update(toastId, { isLoading: false, autoClose: 2000, type: 'info', render: 'CNPJ saved!' })
      await getCnpjs()
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
  }, [getCnpjs])

  const removeCnpj = useCallback(async (id: number) => {
    const toastId = toast.loading('Remove CNPJ...', { closeOnClick: true })
    try {
      if (!id) return
      const toRemove = getCnpjById(id)
      await CnpjServices.remove(id)

      toast.update(toastId, { isLoading: false, autoClose: 2000, type: 'info', render: `CNPJ: ${cnpjHelper.format(toRemove.value)} successfully removed.` })
      await getCnpjs()
    } catch (error) {
      const defaultErrorMessage = 'Could not remove cnpj'
      if (error instanceof AxiosError) {
        const { response } = error
        const errorMessage = response?.data.error.message || defaultErrorMessage
        toast.update(toastId, { isLoading: false, autoClose: 5000, type: 'warning', render: errorMessage })
        return
      }
      toast.update(toastId, { isLoading: false, autoClose: 5000, type: 'error', render: defaultErrorMessage })
    }
  }, [getCnpjById, getCnpjs])

  return {
    cnpjs,
    getCnpjs,
    getCnpjById,
    storeCnpj,
    removeCnpj,
    sortCnpj,
    setSortCnpj,
    filter,
    setFilterCnpj
  }
}
