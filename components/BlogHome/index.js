import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogHomeCard, BlogHomeContainer } from './style'

function BlogHome({posts}) {
  return (
    <BlogHomeContainer>
        <div className='blog__home__content'>
            <h2>Blog</h2>
            <div className='blog__home__content__bottom'>
                {posts.slice( 0, 3 ).map((post) => {
                    return (
                        <BlogHomeCard key={post.id}>
                            <div className='blog__home__img'>
                                <Image src={post.img.url} alt={post.title} width={200} height={200}/>
                            </div>
                            <div className='blog__home__txt'>
                                <Link href={`/blog/${post.slug}`}><h4>{post.title}</h4></Link>
                                <p>{post.resume.length > 150 ?post.resume.substr(0, 220) + "..." :post.resume}</p>
                                <Link href={`/blog/${post.slug}`}>Leia Mais</Link>
                            </div>
                        </BlogHomeCard>
                    )
                })}
            </div>
            <div className='btn__blog'>
                <Link href="/blog">Ver mais postagens</Link>
            </div>
        </div>
    </BlogHomeContainer>
  )
}

export default BlogHome