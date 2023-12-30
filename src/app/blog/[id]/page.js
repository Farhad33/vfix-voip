import Blog from './Blog'

export const metadata = {
  title: 'Vfix blog',
  description: 'vfix blog',
}


export default function page({ params }) {
  return <Blog id={params.id} />
}