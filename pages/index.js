import Head from 'next/head'
import AboutUs from '../components/About'
import BlogHome from '../components/BlogHome'
import Equips from '../components/Equips'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import Loader from '../components/Loader'
import Price from '../components/Price'
import ScrollToTop from '../components/ScrollToTop'
import Services from '../components/ServicesSection'
import Testimonial from '../components/Testimonial'
import { getAllPosts } from '../lib/dato-cms'

export default function Home({posts}) {
  
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
        <BlogHome posts={posts} />
        <ScrollToTop />
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts || []
    },
    revalidate: 5,
  }
}