import Link from 'next/link'

const Nav = () => {
  return (
    <header className="backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-brand-100 sticky top-0 z-40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <div className="h-7 w-7 rounded-xl2 bg-brand-500 shadow-subtle flex justify-center items-center">
            <div className="h-3 w-3 border-6 border-white" />
          </div>
          <span className="font-bold tracking-tight text-brand-500 ">MyBlog</span>
        </Link>
      </div>
    </header>
  )
}

export default Nav
