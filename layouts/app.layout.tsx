import React from 'react'
import Header from '../components/Header'

type Props = {
  title: string | React.ReactNode
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ title, children }) => (
  <div className="bg-spaceBG animate-slideBackground h-screen overflow-y-auto">
    <Header />
    <div className="flex flex-col gap-8 max-w-5xl mx-auto py-12">
      <div className="text-4xl text-white flex justify-center px-8">
        {title}
      </div>
      <div className="mx-auto px-8 w-full">{children}</div>
    </div>
  </div>
)

export default AppLayout
