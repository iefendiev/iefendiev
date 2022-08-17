import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'

import AppLayout from '../layouts/app.layout'
import endpoints from '../constants/endpoints'
import IpekPP from '../public/ipek.jpg'

type Props = {
  content: string
}

const About: NextPage<Props> = ({ content }) => (
  <AppLayout title="About Me">
    <div className="flex gap-20 flex-wrap w-full items-center">
      <article
        className="prose text-lg text-black pr-8 rounded-lg bg-gray-100 p-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="relative before:absolute hover:before:top-4 before:top-6 hover:before:left-4 before:left-6 transition-all duration-700 before:content-[''] before:h-[300px] before:w-[300px] before:border-2 before:rounded-md before:border-red-500 m-auto md:m-0">
        <Image
          src={IpekPP as StaticImageData}
          width={300}
          height={300}
          alt="avatar-image"
          className="rounded-md"
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
