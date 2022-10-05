import Head from 'next/head'
import AboutUs from '../components/About'
import Equips from '../components/Equips'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import Loader from '../components/Loader'
import Price from '../components/Price'
import Services from '../components/ServicesSection'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div id="home">
      <Head>
        <title>Ultra - Locação de Ultraformer</title>
      </Head>

      <Header />
      <main>
        <HomeSlider />
        <AboutUs />
        <Services />
        <Equips />
        <Price />
        <Testimonial />
      </main>

      <Loader />
      <Footer />
    </div>
  )
}
