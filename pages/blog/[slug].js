import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllPosts } from '../../lib/dato-cms';
import BlogIndividual from '../../components/BlogIndividual';

function PostPage({ post }){

  return (
    <div id="post__page">
      <Head>
        {/* Primary Meta Tags */}
        <title>{post.title} | Ultra - Locação de Ultraformer</title>
        <meta name="title" content={`${post.title} | Ultra - Locação de Ultraformer`}/>
      </Head>

      <Header />
      <main>
        <BlogIndividual post={post} />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const posts = await getAllPosts();
  const post = posts.find((s) => s.slug === slug) || null;

  if(!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      allPosts: posts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const slugs = posts.map((s) => ({ params: { slug: s.slug }}));

  return {
    paths: slugs,
    fallback: false,
  }
}

export default PostPage;