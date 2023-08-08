// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })
import dynamic from 'next/dynamic';

const _Layout = dynamic(() => import('./components/layout'))

export default function Home() {
  return (
    <>
      <_Layout title="Home">
        Hello World
      </_Layout>
    </>
  )
}
