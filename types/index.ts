export interface IItem {
  date: string
  title: string
  content: string
  url?: string
  tags?: string[]
}

export type TagType = {
  id: number
  attributes: {
    name: string
  }
}

export type WorkHistoryItem = {
  id: number
  attributes: {
    date: string
    content: string
    title: string
    url?: string
    tags?: { data: TagType[] }
    sort: number
  }
}
