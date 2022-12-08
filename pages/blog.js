import Head from 'next/head';
import React from 'react';
import BlogPage from '../components/BlogPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getAllPosts } from '../lib/dato-cms';

function Blog({posts}) {
  
  return (
    <div id="blog__page">
        <Head>
            <title>Blog | Ultra - Locação de Ultraformer</title>
        </Head>

        <Header />
        <main>
            <BlogPage posts={posts} />
        </main>

        <Footer />
    </div>
  )
}

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts || []
    },
    revalidate: 5,
  }
}