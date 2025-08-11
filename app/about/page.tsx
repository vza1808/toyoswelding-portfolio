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
        src="/MOAB.jpeg"
        alt="Moab"
        width={500}
        height={500}
        className="rounded-lg mb-6"
      />
      <div className="mb-6">
        I am a licensed subcontractor in the State of Utah who performs structural welding in the construction industry. I began learning to weld in my home country, Mexico and continued after immigrating to the United States in 1998. I now have 30+ years of experience in welding both on and off construction sites. My business principally offers services in mobile structural welding as well as the repair of structures (e.g. stairways, panel connections, etc.) for commercial buildings; however, I also work on steel fabrication projects (e.g. giant steel box containers, angle brackets). Over the last six years since my business started, I've been very fortunate to work with some of the most reputable construction companies in Utah.
      </div>
    </section>
  )
}
