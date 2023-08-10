// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })
import dynamic from 'next/dynamic';

const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))

export default function Home() {
  return (
    <>
      <_Title title="Home"/>
      <_Layout>
        <h1 className="bg-blue-500 text-white p-4">
          Hello! Welcome to the Landing Page
        </h1>
      </_Layout>
    </>
  )
}
