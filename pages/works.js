import fs from 'fs'
import path from 'path'
import axios from 'axios'

import { 
  AspectRatio, 
  Container, 
  Heading, 
  Image, 
  SimpleGrid, 
  Text 
} from '@chakra-ui/react'

import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import DetailsModal from '../components/DetailsModal'
import { ImgContainer, ImgOverlay } from '../components/ImageOverlay'

export const getStaticProps = async () => {
  try {
    const res = await axios.get('https://testimonialapi.toolcarton.com/api')
    const testimonials = await res.data

    const imgPath = 'images/works'
    const files = fs.readdirSync(path.join(`public/${imgPath}`))

    const images = files.map(filename => {

      const imgSrc = `${imgPath}/${filename}`

      return {
        imgSrc
      }
    })

    return {
      props: {
        testimonials,
        images
      }
    }
  } catch (error) {
    return { error }
  }
}

const Works = ({ testimonials, images }) => {
  return (
    <Container maxW={'container.md'}>
      <Section duration={0.1}>
        <Heading as="h2" variant="section-header">
          Testimonials
        </Heading>

        <Testimonials testimonials={testimonials} />

      </Section>
      <Section duration={0.2}>
        <Heading as="h2" variant="section-header">
          Works{' '}
          <Text as="span" fontSize={16}>
            (clickable)
          </Text>
        </Heading>

        <SimpleGrid
          columns={[1, 2, 3]}
          spacing={[6]}
          py="2rem"
          listStyleType="none"
        >
          {images.map((img, id) => (
          
            <ImgContainer key={id}>

              <ImgOverlay
                display="flex"
                alignItems="center"
                justifyContent="center"
                opacity={0}
                transition="opacity 0.2s ease"
                zIndex="1"
                _hover={{
                  opacity: 1
                }}
              >
                <DetailsModal id={id} />
              </ImgOverlay>

              <AspectRatio maxW="400px" ratio={4 / 3}>
                <Image src={img.imgSrc} alt="Work screenshot" objectFit="cover" />
              </AspectRatio>

            </ImgContainer>
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  )
}

export default Works
