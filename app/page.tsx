import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Metodio Vazquez
      </h1>
      <div className="flex flex-row items-start mb-6">
        <p className="mb-4 flex-1">
          I'm the owner of Toyo's Welding and Repair Services. I focus on providing high-quality mobile structural welding services in Utah. I’m experienced in structural welding and repairs for commercial buildings as well as steel fabrication projects for the construction industry. I’m skilled in SMAW, GTAW, FCAW, and GMAW welding, and hold certifications in most of these.
        </p>
        <Image
          src="/Toyo.jpeg"
          alt="Metodio Vazquez"
          width={150}
          height={150}
          className="rounded-lg ml-6"
        />
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
