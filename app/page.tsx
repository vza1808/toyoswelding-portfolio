import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Toyo's Welding and Repair Services
      </h1>
      <p className="mb-4">
        {`I'm Andrew Vazquez, a math enthusiast and first-gen advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
