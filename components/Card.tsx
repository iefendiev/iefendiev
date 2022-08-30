import React from 'react'

import { TagType, WorkHistoryItem } from '../types'

type Props = {
  item: WorkHistoryItem
}

const Card: React.FC<Props> = ({ item }) => {
  const { title, content, url = '', tags } = item.attributes

  return (
    <div className="flex flex-col gap-2 bg-white p-8 rounded-lg shadow-md group-hover:shadow-lg overflow-x-auto border-2 border-white group-hover:border-primary w-full">
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{content}</p>
      {url && (
        <p>
          👉{' '}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-[#17CF97]"
          >
            {url}
          </a>
        </p>
      )}
      {tags?.data.length && (
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {tags.data.map((tag: TagType) => (
            <div
              key={tag.id}
              className="bg-gray-900 px-2 py-1 rounded-lg cursor-pointer"
            >
              <p className="text-white">{tag.attributes.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card
