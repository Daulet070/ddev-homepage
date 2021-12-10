import Script from 'next/script'
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Input,
  Stack,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { EmailIcon, ViewIcon } from '@chakra-ui/icons'
import { YMaps, Map } from 'react-yandex-maps'
import Section from '../components/Section'

const Contacts = () => {
  return (
    <Section duration={0.1}>
      <Container maxW="container.md" centerContent overflow="hidden">
        <SimpleGrid
          bg={useColorModeValue('#ffffffed', '#373772ad')}
          style={{ backdropFilter: 'blur(10px)' }}
          columns={[1, 2]}
          p={5}
          gridGap={4}
        >
          <Box w={'100%'}>
            <Heading mb={5} as='h2'>
              Contact
            </Heading>
            <Stack direction={'column'} spacing={5}>
              <Text>
                Fill up the form to contact
              </Text>
              <Text>
                <EmailIcon />  anakhaev_web@vk.com
              </Text>
              <Text>
                <ViewIcon />  Nalhcik, Russia
              </Text>
            </Stack>
          </Box>
          <Box>
            <Box as='form'  w={'100%'} >
              <SimpleGrid columns={1} gridGap={4}>
                <Box as='label' w={'100%'}>
                  <Text as='span'>Name</Text>
                  <Input type={'text'} name='name' placeholder='John' />
                </Box>
                <Box as='label' w={'100%'}>
                  <Text as='span'>Email</Text>
                  <Input type={'email'} name='email' placeholder='examlple@mail.ru' />
                </Box>
                <Box as='label' w={'100%'}>
                  <Text as='span'>Phone</Text>
                  <Input type={'tel'} name='phone' placeholder='+7...' />
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                  <Button type='submit' bgColor={'teal'}>Submit</Button>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </SimpleGrid>
        <YMaps>
          <div>
            My awesome application with maps!
            <Map width={'600px'} height={'300px'} defaultState={{ center: [43.495311, 43.597522], zoom: 18 }} />
          </div>
        </YMaps>
      </Container>
      <Script src='custom/js/phoneMask.js' />
    </Section>
  )
}

export default Contacts
