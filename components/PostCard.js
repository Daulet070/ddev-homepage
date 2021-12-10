import Image from 'next/image'
import Link from 'next/link'
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const PostCard = ({ post }) => {
  return (
    <Center as="li" py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <AspectRatio maxW="400px" ratio={16 / 9}>
            <Image
              src={post.frontmatter.cover_image}
              layout={'fill'}
              loading="lazy"
              alt={post.frontmatter.title}
              objectFit="cover"
            />
          </AspectRatio>
        </Box>

        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            Blog
          </Text>

          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {post.frontmatter.title}
          </Heading>

          <Text color={'gray.500'}>{post.frontmatter.excerpt}</Text>
        </Stack>

        <Stack
          mt={6}
          direction={'row'}
          spacing={4}
          align={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Anakhaev Daulet</Text>
            <Text color={'gray.500'}>{post.frontmatter.date}</Text>
          </Stack>

          <Link href={`/blog/${post.slug}`} passHref>
            <a>
              <Box
                as="span"
                height="24px"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                p="1rem"
                borderRadius="2px"
                fontSize="18px"
                fontWeight="semibold"
                bg="#88cccb"
                _hover={{ textDecoration: 'underline' }}
                _active={{
                  bg: '#dddfe2',
                  transform: 'scale(0.98)',
                  borderColor: '#bec3c9'
                }}
                _focus={{
                  boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
                }}
              >
                Read more <ChevronRightIcon w={9} h={9} />
              </Box>
            </a>
          </Link>
        </Stack>
      </Box>
    </Center>
  )
}

export default PostCard
