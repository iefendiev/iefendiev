import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

import AppLayout from '../layouts/app.layout'
import endpoints from '../constants/endpoints'
import IpekPP from '../public/ipek.jpg'

type Props = {
  content: string
}

const Title = () => (
  <div className="flex flex-col gap-8">
    <h1 className="text-6xl text-white">
      <span className="text-primary">[</span> İpek Efendiev{' '}
      <span className="text-primary">]</span>
    </h1>
    <p className="text-2xl">Frontend Web Developer</p>
  </div>
)

const IMAGE_WIDTH = 600
const IMAGE_HEIGHT = 400

const About: NextPage<Props> = ({ content }) => (
  <AppLayout title={<Title />}>
    <div className="flex gap-20 flex-wrap w-full items-center">
      {content && (
        <article
          className="prose text-lg text-black pr-8 rounded-lg bg-gray-100 p-8 opacity-95"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      <div
        className={clsx(
          "relative after:absolute before:absolute transition-all duration-700 before:content-[''] before:border-2 before:rounded-md before:border-red-500 after:content-[''] after:h-[300px] after:w-[300px] after:border-2 after:rounded-md after:border-red-500 m-auto md:m-0",
          'before:w-[600px]',
          'before:h-[400px]',
          'after:w-[600px]',
          'after:h-[400px]',
          'before:top-[-10px]',
          'before:left-[-10px]',
          'after:top-3',
          'after:left-3',
          'hover:before:top-[-20px]',
          'hover:before:left-[-20px]',
          'hover:after:top-5',
          'hover:after:left-5'
        )}
      >
        <Image
          src={IpekPP as StaticImageData}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt="avatar-image"
          className="rounded-md z-10"
        />
      </div>
    </div>
  </AppLayout>
)

export default About

export async function getStaticProps() {
  const response = await fetch(endpoints.about)
  // const { data } = await response.json()

  return {
    props: {
      content: '',
    },
    revalidate: 3600,
  }
}
