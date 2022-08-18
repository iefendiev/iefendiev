import React from 'react'
import Header from '../components/Header'

type Props = {
  title: string | React.ReactNode
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ title, children }) => (
  <div className="bg-spaceBG animate-slideBackground">
    <Header className="px-4 lg:px-40" />
    <div className="flex flex-col gap-6 px-8 lg:px-40 py-12 h-[calc(100vh-64px)] overflow-auto">
      <h1 className="text-4xl text-white">{title}</h1>
      {children}
    </div>
  </div>
)

export default AppLayout
