import Blog from './Blog'
import { strapiAPI, strapiBaseURL } from '@/lib/api'

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id
  const endPoint = `/articles-msps/${id}?populate=thumbnail`

  let blogData = await strapiAPI(endPoint)
  blogData = blogData.data.data
  const title = `VFIX: ${blogData?.attributes?.title}`

  return {
    title,
    description: blogData?.attributes?.description
  }
}

export default function page({ params }) {
  return <Blog id={params.id} />
}