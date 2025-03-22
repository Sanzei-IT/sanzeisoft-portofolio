export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-8 md:py-8">
      <div className="container mx-auto px-4 pb-16 md:pb-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100">
              Sanzei Soft
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-foreground/70">© {new Date().getFullYear()} Sanzei Soft. All rights reserved.</p>
            <p className="text-foreground/50 text-sm mt-1">Designed and built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

