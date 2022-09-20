import Head from 'next/head'
import AboutUs from '../components/About'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ultra - Locação de Ultraformer</title>
        <meta name="description" content="Ultra - Locação de Ultraformer" />
      </Head>

      <Header />
      <main className="">
        <HomeSlider />
        <AboutUs />
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
