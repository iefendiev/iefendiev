import React from 'react'
import clsx from 'clsx'

import Card from './Card'

type TimeLineProps = {
  content: any[] | undefined
  className?: string
}

const TimeLine: React.FC<TimeLineProps> = ({ content, className = '' }) => {
  const delay = 500

  return (
    <div
      className={clsx('flex flex-col gap-10 p-8 ruler opacity-95', className)}
    >
      {content?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-6 opacity-0 z-10 animate-fadeIn group"
            style={{
              animationDelay: `${delay * index}ms`,
            }}
          >
            <p className="min-w-[250px] text-white">{item.attributes.date}</p>
            <div className="flex shrink-0 w-[10px] h-[10px] border-[1px] border-primary rounded-[50%] bg-white group-hover:bg-primary" />
            <Card item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default TimeLine
