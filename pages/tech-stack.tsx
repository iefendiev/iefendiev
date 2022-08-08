import type { NextPage } from 'next'

import AppLayout from '../layouts/app.layout'
import { TECH_STACK } from '../constants/texts'

type StackCardProps = {
  category: {
    name: string
    items: { title: string; content: string }[]
  }
  key: number
}

const StackCard: React.FC<StackCardProps> = ({ category, key }) => (
  <div key={key} className="bg-gray-100 p-4 rounded-lg md:w-2/6">
    <h2 className="text-xl font-bold mb-1">{category.name}</h2>
    <ul>
      {category.items.map((item, index2) => (
        <li
          className="list-disc ml-4 p-2 rounded-lg hover:bg-gray-200"
          key={index2}
        >
          <p className="text-lg">{item.title}</p>
          {item.content && <p>{item.content}</p>}
        </li>
      ))}
    </ul>
  </div>
)

const TechStack: NextPage = () => (
  <AppLayout title="Tech Stack - Skills">
    <div className="flex flex-col md:flex-row gap-4">
      {TECH_STACK.map((category, index) => (
        <StackCard category={category} key={index} />
      ))}
    </div>
  </AppLayout>
)

export default TechStack
