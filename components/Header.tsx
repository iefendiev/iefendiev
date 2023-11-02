import React from 'react'

import Image from 'next/image'

import Tab from './Tab'

import GitHubPNG from '../public/github.png'
import LinkedInPNG from '../public/linkedin.png'

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
    className="flex justify-center items-center gap-2 cursor-pointer bg-white p-1 rounded-full"
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

const Header: React.FC = () => (
  <div className="shadow-lg py-4 bg-opacity-40 bg-gray-800">
    <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center md:justify-between gap-4 lg:max-w-5xl mx-auto px-8">
      <div className="flex items-center gap-4 flex-col md:flex-row">
        {TABS.map((tab) => (
          <Tab tab={tab} key={tab.href} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <SocialLink
          href="https://github.com/iefendiev"
          logo={<Image src={GitHubPNG} alt="github" height={24} width={24} />}
        />
        <SocialLink
          href="https://www.linkedin.com/in/ipek-efendiev/"
          logo={
            <Image src={LinkedInPNG} alt="linkedin" height={24} width={24} />
          }
        />
      </div>
    </div>
  </div>
)

export default Header
