import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Homepage</title>
    </Head>
    <div className={styles.title}>
    <p className="text-2xl m-3 p-3 text-rose-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod corrupti libero error unde amet qui nihil modi sed expedita enim aspernatur, mollitia architecto doloribus non, cum magnam delectus possimus?</p>
    <p className="text-2xl m-3 p-3 text-purple-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis consequatur itaque id cum reiciendis impedit autem distinctio. Id ipsam velit iste obcaecati mollitia qui quo dolores possimus ab sapiente?</p>
    <Link href="/lists" className={styles.btn}>See Ninjas List</Link>
  </div>
  </>
    
  )
}
