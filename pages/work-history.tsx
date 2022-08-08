import type { NextPage } from 'next'
import { useMediaQuery } from 'react-responsive'

import AppLayout from '../layouts/app.layout'
import TimeLine from '../components/TimeLine'
import Card from '../components/Card'
import { WORK_HISTORY as CONTENT } from '../constants/texts'

const Portfolio: NextPage = () => {
  const isMDScreen = useMediaQuery({
    query: '(min-width: 650px)',
  })

  return (
    <AppLayout title="Work History / Projects">
      {isMDScreen ? (
        <TimeLine content={CONTENT} />
      ) : (
        <div>
          {CONTENT.map((item, index) => (
            <div key={index} className="flex flex-col gap-1 mt-4 shadow-lg">
              <h1 className="text-center text-lg text-primary">{item.date}</h1>
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </AppLayout>
  )
}

export default Portfolio
