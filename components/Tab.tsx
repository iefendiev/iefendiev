import React from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

type Props = {
  tab: {
    label: string
    href: string
  }
}

const Tab: React.FC<Props> = ({ tab }) => {
  const { push, pathname } = useRouter()
  const isActive = pathname === tab.href

  const handleClick = () => push(tab.href)

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'px-2 py-1 rounded-md transition-all duration-500 hover:text-white hover:shadow-xl bg-primary whitespace-nowrap',
        isActive
          ? 'bg-primary text-white button-active-transition'
          : 'bg-white text-primary border-[1px] border-primary button-transition'
      )}
    >
      {tab.label}
    </button>
  )
}

export default Tab
