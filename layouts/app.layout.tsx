import React from 'react'
import Header from '../components/Header'

type Props = {
  title: string
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ title, children }) => (
  <div>
    <Header className="px-4 lg:px-40" />
    <div className="flex flex-col gap-6 px-8 lg:px-40 py-6">
      <h1 className="text-4xl">{title}</h1>
      {children}
    </div>
  </div>
)

export default AppLayout
