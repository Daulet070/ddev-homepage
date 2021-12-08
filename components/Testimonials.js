import { useState } from 'react'
import Head from 'next/head'

import Slider from 'react-slick'

import { 
    Box, 
    IconButton, 
    useBreakpointValue, 
    Avatar, 
    Text, 
    Stack 
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Carousel = ({ testimonials }) => {
    
    // For use custom buttons, need a reference variable to change the state
    const [slider, setSlider] = useState(null);

    // These are the breakpoints which changes the position of the buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '5%', md: '10px' });

    return (
        <Box
            position={'relative'}
            height={{ base: '500px', md: '400px' }}
            width={'full'}
            overflow={'hidden'}
        >    
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>

            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                colorScheme="teal"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            >
                <ChevronLeftIcon w={8} h={8} />
            </IconButton>

            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                colorScheme="teal"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            >
                <ChevronRightIcon w={8} h={8} />
            </IconButton>
            
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {testimonials.map(({id, avatar, name, description, message}) => (
                    <Stack
                        key={ id }
                        py={16}
                        px={8}
                        spacing={{ base: 8, md: 10 }}
                        align={'center'}
                        direction={'column-reverse'}
                    >
                        <Text
                            fontSize={{ base: 'xl', md: '2xl' }}
                            textAlign={'center'}
                        >
                            { message }
                        </Text>
                        <Box textAlign={'center'}>
                            <Avatar
                                src={ avatar }
                                alt={ name }
                                mb={2}
                            />
                            <Text fontWeight={600}>
                                { name }
                            </Text>
                            <Text fontSize={'sm'}>
                                { description }
                            </Text>
                        </Box>
                    </Stack>
                ))}
            </Slider>
        </Box>
    );
}

export default Carousel