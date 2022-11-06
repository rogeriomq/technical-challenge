import React, { ComponentPropsWithRef } from 'react'

interface TabButtonProps extends ComponentPropsWithRef<'button'> {
  selected: boolean;
}

export const TabButton = React.forwardRef((props: TabButtonProps, forwardRef) => {
  const { children, selected, ref, ...rest } = props
  return (
    <button
      ref={ref}
      className={`
            w-full rounded-lg py-2.5 text-sm font-medium leading-5
            ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 
            ${selected ? 'bg-secondary text-white text-base' : 'bg-primary text-secondary'}
          `}
      {...rest}
    >
      {children}
    </button>
  )
})

TabButton.displayName = 'TabButton'
