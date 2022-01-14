import type { NextPage } from 'next'
import css from './header.module.css'
import cn from 'classnames'

const Header: NextPage = () => {
  return (
    <div className={cn(css.Container, 'container')}>
      header
    </div>
  )
}

export { Header }
