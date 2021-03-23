import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/navBar.js'

export default function Home() {
  return (
    <>
          <Nav> { /* Change to Sidebar NavBar*/ }

</Nav>
    <div className={styles.container}>
      <Head>
        <title>Austin Wood's Portfolio</title>
        <link rel="icon" href="/favicon.ico" /> {/*Change This logo*/}
      </Head>

   
      <footer className={styles.footer}>
        Heres the Feet!
      </footer>
    </div>
    </>
  )
}
