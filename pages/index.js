import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import SlillList from '../components/SkillList'
import { BioSection, BioYear } from '../components/Bio'
import { skillList } from '../utils'

const Page = () => {
  return (
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        bg={useColorModeValue('darkseagreen', 'darkmagenta')}
        p={3}
        textAlign="center"
        mt={{ md: 4 }}
      >
        Hello, I&apos;m a frontend developer based in Russia!
      </Box>
      <Box
        display={{ sm: 'flex' }}
        css={{ gap: '1.5rem' }}
        pt={{ base: 4, md: 4 }}
      >
        <Box
          display="flex"
          flexShrink={0}
          justifyContent={{ base: 'center', sm: 'left' }}
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="150px"
            display="inline-block"
            borderRadius="1rem"
            src="/images/adn.jpg"
            alt="Profile image"
          />
        </Box>
        <Box flexGrow={1} textAlign={{ base: 'center', sm: 'left' }}>
          <Heading as="h2" variant="page-title">
            Daulet Anakhaev
          </Heading>
          <p>Digital craftzman ( Developer / 3D artist )</p>
          <Box as="h3" fontSize="18px" fontWeight="bold">
            On the web
          </Box>
          <p style={{ fontWeight: 'bold' }}>
            VK: &nbsp;
            <Box
              as="a"
              fontWeight="normal"
              _hover={{
                textDecoration: 'underline'
              }}
              href="http://vk.com/anakhaev_web"
              target="_blank"
              rel="noopener noreferrer"
            >
              anakhaev_web
            </Box>
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Telegram: &nbsp;
            <Box
              as="a"
              fontWeight="normal"
              _hover={{
                textDecoration: 'underline'
              }}
              href="http://t.me/anahad07"
              target="_blank"
              rel="noopener noreferrer"
            >
              anahad07
            </Box>
          </p>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Daulet is a freelance and a frontend developer based in Nalchik with a
          passion for building digital services. I love to learn and create
          things that are interesting and inspiring to me. At the moment I have
          more than a year of experience in developing applications and sites
          and one completed commercial project
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Nalchik, Russia
        </BioSection>
        <BioSection>
          <BioYear>2020 Summer</BioYear>
          Graduated from Kabardino-Balkarian State University with a degree in
          Mechatronics Robotics
        </BioSection>
        <BioSection>
          <BioYear>2020 Autumn to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Stack
        </Heading>
        <SlillList skills={skillList} />
      </Section>
    </Container>
  )
}

export default Page
