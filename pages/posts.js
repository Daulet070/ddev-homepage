import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Section from '../components/Section'
import PostCard from '../components/PostCard'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { sortByDate } from '../utils'
import Pagination from '../components/Pagination'

const Posts = ({ posts }) => {
  const [postCards, setPostCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postCardsPerPage = 4

  useEffect(() => {
    setPostCards(posts)
  }, [posts])
  
  const lastPostCardIndex = currentPage * postCardsPerPage
  const firstPostCardIndex = lastPostCardIndex - postCardsPerPage
  const currentPostCards = postCards.slice(firstPostCardIndex, lastPostCardIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <Container maxW="container.md">
      <Section>
        <Heading as="h2" variant="section-title">
          Latest posts
        </Heading>
        <SimpleGrid
          as="ul"
          columns={[1, 2]}
          spacing={[6]}
          py={2}
          listStyleType="none"
        >
          {currentPostCards.map((post, index) => (
            <PostCard key={index} post={post} />
          ))} 
        </SimpleGrid>
        <Pagination 
          postCardsPerPage={postCardsPerPage} 
          totalPostsCard={postCards.length} 
          paginate={paginate}
        />
      </Section>
    </Container>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}

export default Posts
