const Footer = () => {
  return (
    <footer className="border-t border-brand-100 bg-white/80">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 text-sm text-ink-3 flex items-center justify-between">
        <p>© {new Date().getFullYear()} MyBlog</p>
        <p className="hidden sm:block">Crafted with passion.</p>
      </div>
    </footer>
  )
}

export default Footer
