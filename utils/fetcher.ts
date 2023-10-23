const baseURL = 'https://iefendiev-strapi.fly.dev/api'

const requestInit = {
  json: true,
  headers: {
    ...(process.env.NEXT_PUBLIC_API_TOKEN
      ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` }
      : []),
  },
}

export const fetcher = (endpoint: string) =>
  fetch(`${baseURL}${endpoint}`, requestInit).then((res) => res.json())
