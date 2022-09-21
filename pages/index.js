import Head from 'next/head'
import AboutUs from '../components/About'
import Equips from '../components/Equips'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import Services from '../components/ServicesSection'

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
        <Services />
        <Equips />
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
