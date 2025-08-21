import { LinkButton } from '@/components/ui'

const NotFound = () => {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center max-w-md">
        <div className="text-3xl font-bold text-ink-3">404</div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
          Page not found
        </h1>
        <p className="text-ink-3 mb-6">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <LinkButton href="/">Go Home</LinkButton>
          <LinkButton href="/new-post" variant="outline">
            Create a Post
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default NotFound
