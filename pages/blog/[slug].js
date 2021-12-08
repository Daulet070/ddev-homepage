import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Section from '../../components/Section'
import { Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const PostPage = ({ 
    frontmatter: { title, date, cover_image }, 
    // slug, 
    content 
}) => {
    return (
        <>
            <Link href='/posts'>
                <a>Go back</a>
            </Link>
            <Section>
                <Heading as="h1" variant="section-title">
                    {title}
                </Heading>
                <div>Posted on {date}</div>
                <Image src={cover_image} alt='' />
                <div>
                    <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                </div>
            </Section>
        </>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {

    const markdownWidthMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data:frontmatter, content} = matter(markdownWidthMeta)

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}

export default PostPage;