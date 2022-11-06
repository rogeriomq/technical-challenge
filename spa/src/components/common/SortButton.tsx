import React, { ComponentPropsWithRef } from 'react'
import { SortType } from '../../hooks/useCpf'
import { SortAlphaDownIcon, SortAlphaUpIcon } from './Icons'

interface SortButtonProps extends ComponentPropsWithRef<'button'> {
  sort: SortType
}

export const SortButton = React.forwardRef((props: SortButtonProps, forwardRef) => {
  const { sort, ref, ...rest } = props

  return (
    <button
      ref={ref}
      className="rounded-lg"
      {...rest}
    >
      {
        sort === 'asc'
          ? <SortAlphaDownIcon className=" text-primary w-6 h-6 active:h-5"/>
          : <SortAlphaUpIcon className=" text-primary w-6 h-6 active:h-5"/>
      }
    </button>
  )
})

SortButton.displayName = 'SortButton'
