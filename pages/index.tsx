import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World
      <Link href="/lists">See Ninjas List</Link>
    </div>
  )
}
