import type { NextPage } from 'next'
import css from './layout.module.css'
import { Navigation } from "../Navigation"

interface LayoutProps  { 
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css.Wrapper}>
      <aside className={css.NavigationContainer}>
        <Navigation />
      </aside>
      <main className={css.Main}>
        {children}
      </main>
    </div>
  )
}

export { Layout }
