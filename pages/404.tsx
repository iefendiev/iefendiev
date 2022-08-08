import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Custom404: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/about')
  })

  return null
}

export default Custom404
