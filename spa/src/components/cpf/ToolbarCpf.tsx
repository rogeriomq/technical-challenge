import React, { useState } from 'react'
import { SortType } from '../../hooks/useCpf'
import { cpfHelper } from '../../utils/cpfHelpers'
import { PlusIcon, SearchIcon } from '../common/Icons'
import { SortButton } from '../common/SortButton'

export type ToolbarCpfProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  getCpfs: () => void
  sort: SortType
  setSort: React.Dispatch<React.SetStateAction<SortType>>
  setFilter: (input: string) => void
}
export function ToolbarCpf({ setIsOpen, getCpfs, sort, setSort, setFilter }: ToolbarCpfProps) {
  const [input, setInput] = useState('')

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setFilter(input)
    getCpfs()
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    const formattedValue = cpfHelper.format(value)
    setInput(formattedValue)
  }

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSort(sort === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className="flex space-x-2 items-center my-2">
      <div className="relative w-full">
        <form onSubmit={onSubmit}>
          <input
            className="pl-7 pr-7 py-2 w-full rounded-md"
            aria-label="Input CPF search here"
            maxLength={14}
            type="text"
            name="inputCpf"
            onChange={handleInput}
            value={input}
            placeholder="Type CPF here"
          />
        </form>
        <div className="absolute inset-y-0 left-1 flex items-center h-full">
          <button type="button" onClick={onSubmit}>
          < SearchIcon className="text-primary/20 w-5 h-5 active:h-4"/>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-3 px-2">
        <SortButton
          aria-label='Sort CPF ascending or descending'
          type="button"
          sort={sort}
          data-tip="Toggle ascending/descending cpfs"
          onClick={handleSort}
        />

        <button
          className="rounded-lg"
          type="button"
          aria-label= "New CPF"
          data-tip="New CPF"
          onClick={() => setIsOpen(true)}>
          <PlusIcon className=" text-secondary w-6 h-6 active:h-5"/>
        </button>
      </div>
    </div>
  )
}
