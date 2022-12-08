import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogPageCard, BlogPageContainer } from './style'

function BlogPage({ posts }) {
    
  return (
    <BlogPageContainer>
        <h1>Blog</h1>
        <div className='blog__page__content'>
            {posts.map((post, index) => {
                return (
                    <BlogPageCard key={post.index}>
                        <div className='blog__home__img'>
                            <Image src={post.img.url} alt={post.title} width={200} height={200}/>
                        </div>
                        <div className='blog__home__txt'>
                            <Link href={`/blog/${post.slug}`}><h4>{post.title}</h4></Link>
                            <p>{post.resume.length > 150 ?post.resume.substr(0, 220) + "..." :post.resume}</p>
                            <Link href={`/blog/${post.slug}`}>Leia Mais</Link>
                        </div>
                    </BlogPageCard>
                )
            })}
        </div>
    </BlogPageContainer>
  )
}

export default BlogPage