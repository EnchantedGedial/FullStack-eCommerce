import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'

import Body from '@/components/Body'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CodesWare</title>
        <meta name="description" content="Let's Buy what u Want"  />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
 
      <Body/>
      
      </div>
    
    </>
  )
}
