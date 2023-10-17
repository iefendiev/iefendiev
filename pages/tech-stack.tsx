import type { NextPage } from 'next'

import AppLayout from '../layouts/app.layout'
import endpoints from '../constants/endpoints'

type ItemType = {
  id: number
  attributes: {
    title: string
    content: string
  }
}

type StackCardProps = {
  data: ItemType[]
  title: string
}

const StackCard: React.FC<StackCardProps> = ({ data, title }) => (
  <div className="bg-gray-100 p-8 rounded-lg md:w-2/6 h-fit opacity-95">
    <h2 className="text-xl font-semibold mb-1">{title}</h2>
    <ul>
      {data.map((item) => (
        <li
          className="list-disc ml-4 p-2 rounded-lg hover:bg-gray-200"
          key={item.id}
        >
          <p className="text-lg">{item.attributes.title}</p>
          {item.attributes.content && <p>{item.attributes.content}</p>}
        </li>
      ))}
    </ul>
  </div>
)

type DataType = {
  attributes: {
    tech_items: {
      data: ItemType[]
    }
  }
}

type Props = {
  techData?: DataType
  stylingData?: DataType
  othersData?: DataType
}

const TechStack: NextPage<Props> = ({ techData, stylingData, othersData }) => (
  <AppLayout title="Things that I like to use">
    <div className="flex flex-col md:flex-row gap-4">
      {techData && (
        <StackCard
          data={techData.attributes.tech_items.data}
          title="Tech Stack"
        />
      )}
      {stylingData && (
        <StackCard
          data={stylingData.attributes.tech_items.data}
          title="Styling"
        />
      )}
      {othersData && (
        <StackCard
          data={othersData?.attributes.tech_items.data}
          title="Others"
        />
      )}
    </div>
  </AppLayout>
)

export default TechStack

export async function getStaticProps() {
  const res1 = await fetch(endpoints['tech-stack'])
  // const { data: techData } = await res1.json()

  const res2 = await fetch(endpoints['styling'])
  // const { data: stylingData } = await res2.json()

  const res3 = await fetch(endpoints['others'])
  // const { data: othersData } = await res3.json()

  return {
    props: {
      techData: null,
      stylingData: null,
      othersData: null,
    },
    revalidate: 3600,
  }
}
