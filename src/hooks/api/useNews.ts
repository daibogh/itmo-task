import useSWR from "swr"

const fetcher = (arg: string) =>
  fetch(arg)
    .then((response) => response.json())
    .then(({ news }) => news)
export type NewsPayload = {
  title: string
  date: string
  image_big: string
  image_small: string
  url: string
  id: number
  lead: string
}
export const useNews = () => {
  const { data } = useSWR<NewsPayload[], any>(
    `/api/news/list/?ver=2.0&amp;lead=1&amp;per_page=6`,
    fetcher
  )
  return data
}
