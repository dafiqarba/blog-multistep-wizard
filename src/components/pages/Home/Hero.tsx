import { LinkButton } from '@/components/ui/Button'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-brand-100/60 border border-brand-100 rounded-3xl p-8 md:p-12 shadow-subtle">
      <div className="max-w-3xl space-y-4">
        <span className="inline-block font-bold text-xs uppercase tracking-widest text-ink-3">
          Welcome!
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink-1">
          MyBlog is a cozy place to write and read
        </h1>
        <p className="text-base md:text-lg text-ink-2">
          Create posts with a multi-step blog creation wizard. Browse with comfort in a
          soft pastel brown theme.
        </p>
        <div className="pt-2 flex gap-3">
          <LinkButton href="/new-post">Start writing</LinkButton>
          <LinkButton href="#posts" variant="outline">
            Explore posts
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

export default Hero
