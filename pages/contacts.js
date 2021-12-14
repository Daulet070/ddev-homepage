import { Container} from '@chakra-ui/react'

import { YMaps, Map } from 'react-yandex-maps'

import ContactForm from '../components/ContactForm'
import Section from '../components/Section'

const Contacts = () => {
  
  return (
    <Section duration={0.1}>
      <Container maxW="container.md" centerContent overflow="hidden">

        <ContactForm />

        <br />
        
        <YMaps>
          <div>
            <Map width={'600px'} height={'300px'} defaultState={{ center: [43.495311, 43.597522], zoom: 18 }} />
          </div>
        </YMaps>

      </Container>
    </Section>
  )
}

export default Contacts
