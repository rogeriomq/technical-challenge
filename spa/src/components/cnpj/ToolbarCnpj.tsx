import React, { useState } from 'react'
import type { SortType } from '../../hooks/useCnpj'
import { cnpjHelper } from '../../utils/cnpjHelpers'
import { PlusIcon, SearchIcon } from '../common/Icons'
import { SortButton } from '../common/SortButton'

export type ToolbarCnpjProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  getCnpjs: () => void
  sort: SortType
  setSort: React.Dispatch<React.SetStateAction<SortType>>
  setFilter: (input: string) => void
}
export function ToolbarCnpj({ setIsOpen, getCnpjs, sort, setSort, setFilter }: ToolbarCnpjProps) {
  const [input, setInput] = useState('')

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setFilter(input)
    getCnpjs()
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    const formattedValue = cnpjHelper.format(value)
    setInput(formattedValue)
  }

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSort(sort === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className="flex space-x-2 items-center w-full my-2">
      <div className="relative w-full">
        <form onSubmit={onSubmit}>
        <input
          className="pl-7 pr-7 py-2 w-full rounded-md"
          aria-label="Input CNPJ search here"
          maxLength={14}
          type="text"
          name="inputCnpj"
          onChange={handleInput}
          value={input}
          placeholder="Type CNPJ here"
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
          aria-label="Toggle ascending/descending"
          type="button"
          sort={sort}
          data-tip="Toggle ascending/descending"
          onClick={handleSort}
        />

        <button
          className="rounded-lg"
          type="button"
          aria-label= "New CNPJ"
          data-tip="New CNPJ"
          onClick={() => setIsOpen(true)}>
          <PlusIcon className=" text-secondary w-6 h-6 active:h-5"/>
        </button>
      </div>
    </div>
  )
}
