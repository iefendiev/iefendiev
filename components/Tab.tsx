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
    <Link type="button" href={tab.href}>
      <a
        className={clsx(
          'transition-all duration-300 hover:text-primary',
          isActive ? 'text-primary underline underline-offset-8' : 'text-white'
        )}
      >
        {tab.label}
      </a>
    </Link>
  )
}

export default Tab
