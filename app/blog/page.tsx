import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'About Me',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About Me</h1>
      <BlogPosts />
    </section>
  )
}
