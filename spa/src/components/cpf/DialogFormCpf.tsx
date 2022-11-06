import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { StoreCpfProps } from '../../hooks/useCpf'
import { ICpf } from '../../interfaces'
import { cpfHelper } from '../../utils/cpfHelpers'

type DialogFormCpfProps = {
  id: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getCpfById: (id: number) => ICpf
  storeCpf: (props: StoreCpfProps) => void
}

type FormErrorType = {
  inputCpfError: string
} | null

const INITIAL_FORM_ERROR = null

export function DialogFormCpf({ id, isOpen, setIsOpen, getCpfById, storeCpf }: DialogFormCpfProps) {
  const [input, setInput] = useState('')
  const [formErrors, setFormErrors] = useState<FormErrorType>(INITIAL_FORM_ERROR)
  const title = id > 0 ? 'Edit CPF' : 'New CPF'

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const hasValid = formValidate()
    setFormErrors(() => hasValid)

    if (hasValid !== null) return

    storeCpf({
      id,
      value: cpfHelper.strip(input)
    })

    onClose()
  }

  const onClose = useCallback(() => {
    setInput('')
    setIsOpen(false)
  }, [setIsOpen])

  const formValidate = useCallback(() => {
    if (!cpfHelper.isValid(input)) {
      return {
        ...formErrors,
        inputCpfError: 'Invalid CPF. Try again!'
      }
    }
    return null
  }, [formErrors, input])

  const handleChangeMask = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setInput(cpfHelper.format(value))
  }

  useEffect(() => {
    if (id > 0 && isOpen) {
      const cpf = getCpfById(id)
      setInput(cpfHelper.format(cpf.value))
    }
  }, [id, getCpfById, isOpen])

  return (

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-90" />
        </Transition.Child>

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full rounded-lg max-w-xs px-4 bg-gradient-to-t from-primary/50 to-white">
            <Dialog.Title className="text-center py-2">{title}</Dialog.Title>
            <form onSubmit={onSubmit}>
              <label>
                <input
                  className="px-3 py-2 w-full rounded-md"
                  aria-label="CPF input text"
                  maxLength={14}
                  type="text"
                  name="inputCpf"
                  onChange={handleChangeMask}
                  value={input}
                  placeholder="Input a Cpf"
                />
                <span className='text-red-700 font-light text-sm'>{formErrors?.inputCpfError}</span>
              </label>

              <div className='flex justify-between items-center py-5 font-bold'>
                <button
                  className="bg-red-500 text-white px-5 py-1 rounded-lg" type="button"
                  data-tip="Cancel/close form"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary text-white px-5 py-1 rounded-lg"
                  data-tip="Save"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}
