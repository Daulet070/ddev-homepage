import fs from 'fs'
import path from 'path'
import axios from 'axios'

import {
    AspectRatio,
    Heading,
    Image,
    SimpleGrid,
} from '@chakra-ui/react'

import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import DetailsModal from '../components/DetailsModal'
import { ImgContainer, ImgOverlay } from '../components/ImageOverlay'

export const getStaticProps = async () => {
    try {
        const res = await axios.get('https://testimonialapi.toolcarton.com/api');
        const testimonials = await res.data;
        
        const imgPath = 'images/works'
        const files = fs.readdirSync(path.join(`public/${imgPath}`))

        const images = files.map(filename => {

            const img = `${imgPath}/${filename}`

            return {
                img
            }
        })
        
        return {
            props: { 
                testimonials,
                images
            }
        };
    } catch (error) {
        return { error };
    }
}

const Works = ({ testimonials, images }) => {
    
    return (
        <Section duration={0.1}>
            <Heading as="h2" variant="section-header">
                Works
            </Heading>

            <Testimonials testimonials={testimonials} />
            
            <SimpleGrid
                columns={[1, 2, 3]}
                spacing={[6]}
                py='2rem'
                listStyleType="none"
            >
                {images.map(({img}, id) => (
                    <ImgContainer key={id}>
                        <ImgOverlay 
                            display='flex' 
                            alignItems='center' 
                            justifyContent='center'
                            opacity={0}
                            transition='opacity 0.2s ease'
                            zIndex='1'
                            _hover={{
                                opacity: 1
                            }}
                        >
                            <DetailsModal />
                        </ImgOverlay>
                        <AspectRatio maxW='400px' ratio={4 / 3}>
                            <Image src={img} alt='Work screenshot' objectFit='cover' />
                        </AspectRatio>
                    </ImgContainer>
                ))}
            </SimpleGrid>
        </Section>
    )
}

export default Works;