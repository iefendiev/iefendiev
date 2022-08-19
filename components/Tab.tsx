import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  tab: {
    label: string
    href: string
  }
}

const Tab: React.FC<Props> = ({ tab }) => {
  const { pathname } = useRouter()
  const isActive = pathname === tab.href

  return (
    <Link href={tab.href}>
      <a
        className={clsx(
          'relative before:content-[""] before:absolute before:block before:w-full before:h-[1px] before:bottom-[-4px] before:left-0 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300',
          isActive
            ? 'text-primary before:scale-x-100 before:bg-primary'
            : 'text-white before:bg-white'
        )}
      >
        {tab.label}
      </a>
    </Link>
  )
}

export default Tab
