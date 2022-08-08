import React from 'react'

import { IItem } from '../types'

type CardProps = {
  item: IItem
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { title, content, url = '', tags = [] } = item

  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg overflow-x-auto">
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
      {tags.length && (
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-gray-900 px-2 py-1 rounded-lg cursor-pointer"
            >
              <p className="text-white">{tag}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card
