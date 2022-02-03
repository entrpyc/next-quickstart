import css from './navigation.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { navigationData } from './data/navigation'

const Navigation = () => {
  const { profile, menu, external, print, contact } = navigationData

  return (
    <div className={css.Container}>
      <div className="ProfileContainer">
        <Image
          src={profile}
          alt="Profile"
          width={100}
          height={100}
        />
      </div>
      <div className={cn(css.MenuContainer, css.Wrap)}>
        {menu.map((item, i) => 
          <Link key={`link-${i}`} href={item.anchor}>
            <a>{item.title}</a>
          </Link>
        )}
      </div>
      <div className={cn(css.ExternalContainer, css.Wrap)}>
        {external.map((item, i) => (
          <a key={`link-${i}`} href={item.anchor}>{item.title}</a>
        ))}
      </div>
      <div className={cn(css.ContactContainer, css.Wrap)}>
        {contact.map((item, i) => (
          <a key={`link-${i}`} href={item.href}>{item.title}</a>
        ))}
        {print && <button>p</button>}
      </div>
    </div>
  )
}


export { Navigation }
