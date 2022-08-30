import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import AppLayout from '../layouts/app.layout'
import TimeLine from '../components/TimeLine'
import Card from '../components/Card'
import endpoints from '../constants/endpoints'
import { WorkHistoryItem } from '../types'

type Props = {
  data: WorkHistoryItem[]
}

const Portfolio: NextPage<Props> = ({ data }) => {
  const isMDScreen = useMediaQuery({
    query: '(min-width: 650px)',
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    return () => {
      setIsLoaded(false)
    }
  }, [])

  return isLoaded ? (
    <AppLayout title="Work History / Projects">
      {isMDScreen ? (
        <TimeLine content={data} />
      ) : (
        <div>
          {data.map((item: WorkHistoryItem) => (
            <div key={item.id} className="flex flex-col gap-1 mt-4 shadow-lg">
              <h1 className="text-center text-lg text-white">
                {item.attributes.date}
              </h1>
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </AppLayout>
  ) : null
}

export default Portfolio

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const response = await fetch(endpoints['work-history'])
  const { data } = await response.json()

  return {
    props: {
      data: data.sort(
        (a: WorkHistoryItem, b: WorkHistoryItem) =>
          Number(a.attributes.order) - Number(b.attributes.order)
      ),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every t seconds
    revalidate: 3600, // In seconds
  }
}
