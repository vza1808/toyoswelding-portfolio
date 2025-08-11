import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'About',
  description: 'Read my about page.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <Image
        src="/DONUT.jpeg"
        alt="Donut"
        width={300}
        height={300}
        className="rounded-lg mb-6"
      />
      <BlogPosts />
    </section>
  )
}
