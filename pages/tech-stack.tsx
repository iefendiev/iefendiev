import type { NextPage } from 'next'

import AppLayout from '../layouts/app.layout'
import endpoints from '../constants/endpoints'
import { fetcher } from '../utils/fetcher'

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
  <div className="bg-gray-100 p-8 rounded-lg h-fit opacity-95 w-full">
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
    <div className="flex flex-col md:flex-row gap-4 max-w-5xl w-full">
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
  const { data: techData } = await fetcher(endpoints['tech-stack'])
  const { data: stylingData } = await fetcher(endpoints['styling'])
  const { data: othersData } = await fetcher(endpoints['others'])

  return {
    props: {
      techData: techData[0],
      stylingData: stylingData[0],
      othersData: othersData[0],
    },
    revalidate: 3600,
  }
}
