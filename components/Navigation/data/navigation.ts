type ContactType = {
  title: string,
  href: string,
  type: "phone"|"email",
}

type MenuLinkType = {
  title: string,
  anchor: string,
}


type NavigationProps = {
  profile: string,
  menu: MenuLinkType[],
  external: MenuLinkType[],
  print: boolean,
  contact: ContactType[],
}

export const navigationData: NavigationProps =  {
  profile: "/images/profile.jpg",
  menu: [
    {
      title: "CV",
      anchor: "/cv"
    },
    {
      title: "PortFolio",
      anchor: "/portfolio"
    },
    {
      title: "Motivational Letter",
      anchor: "/motivational-letter"
    }
  ],
  external: [
    {
      title: "NPM",
      anchor: "https://www.npmjs.com/~entrpyc"
    },
    {
      title: "GitHub",
      anchor: "https://github.com/entrpyc"
    }
  ],
  contact: [
    {
      title: "+359 896 929 913",
      href: "tel:+359896929913",
      type: "phone"
    },
    {
      title: "contact@a-angelov.eu",
      href: "mailto:contact@a-angelov.eu",
      type: "email"
    }
  ],
  print: true
}