import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'

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

const About: NextPage<Props> = ({ content }) => (
  <AppLayout title={<Title />}>
    <div className="flex gap-20 flex-wrap w-full items-center">
      <article
        className="prose text-lg text-black pr-8 rounded-lg bg-gray-100 p-8 opacity-95"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="relative after:absolute before:absolute hover:before:top-8 hover:after:top-6 hover:before:left-8 hover:after:left-6 before:top-6 before:left-6 transition-all duration-700 before:content-[''] before:h-[300px] before:w-[300px] before:border-2 before:rounded-md before:border-red-500 after:content-[''] after:h-[300px] after:w-[300px] after:border-2 after:rounded-md after:border-red-500 after:top-4 after:left-4 m-auto md:m-0">
        <Image
          src={IpekPP as StaticImageData}
          width={300}
          height={300}
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
  const { data } = await response.json()

  return {
    props: {
      content: data[0].attributes.content,
    },
    revalidate: 3600,
  }
}
