import type { NextPage } from 'next'
// import css from './aside.module.css'
import cn from 'classnames'
import Image from 'next/image'
import fetch from 'isomorphic-unfetch'



type NavigationProps = {
  profile: string
}

export default function Home(data: NavigationProps) {
  return (  
    <div>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const req = await fetch(`${process.env.API}/navigation.json`)
//   console.log(req);
//   const data = await req.json();

//   console.log(data);

//   return {
//     props: data
//   }
// }
