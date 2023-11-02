import React from 'react'
import Header from '../components/Header'

type Props = {
  title: string | React.ReactNode
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ title, children }) => (
  <div className="bg-spaceBG animate-slideBackground">
    <Header />
    <div className="flex flex-col gap-6 max-w-5xl mx-auto py-12 h-[calc(100vh-64px)] overflow-auto">
      <div className="text-4xl text-white flex justify-center px-8">
        {title}
      </div>
      <div className="mx-auto px-8 w-full">{children}</div>
    </div>
  </div>
)

export default AppLayout
