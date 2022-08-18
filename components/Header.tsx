import React from 'react'

import Image from 'next/image'

import Tab from './Tab'

import GitHubPNG from '../public/github.png'
import LinkedInPNG from '../public/linkedin.png'
import clsx from 'clsx'

type SocialLinkProps = {
  href: string
  logo: React.ReactNode
  text?: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, logo, text = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center gap-2 cursor-pointer bg-white rounded-full p-1"
  >
    {logo}
    {text && <p className="hover:underline">{text}</p>}
  </a>
)

const TABS = [
  {
    label: 'About Me',
    href: '/about',
  },
  {
    label: 'Tech Stack',
    href: '/tech-stack',
  },
  {
    label: 'Work History / Projects',
    href: '/work-history',
  },
]

type HeaderProps = {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => (
  <div
    className={clsx(
      'flex items-center justify-between shadow-lg py-4 flex-wrap gap-4 md:flex-nowrap flex-col md:flex-row bg-opacity-25 bg-slate-800 hover:bg-opacity-50',
      className
    )}
  >
    <div className="flex items-center gap-4 flex-col md:flex-row">
      {TABS.map((tab) => (
        <Tab tab={tab} key={tab.href} />
      ))}
    </div>
    <div className="flex items-center gap-3">
      <SocialLink
        href="https://github.com/iefendiev"
        logo={
          <Image
            src={GitHubPNG}
            alt="ipek-efendiev-github"
            height={24}
            width={24}
          />
        }
      />
      <SocialLink
        href="https://www.linkedin.com/in/ipek-efendiev/"
        logo={
          <Image
            src={LinkedInPNG}
            alt="ipek-efendiev-linkedin"
            height={20}
            width={24}
          />
        }
      />
    </div>
  </div>
)

export default Header
