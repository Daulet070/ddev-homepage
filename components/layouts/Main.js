import Head from 'next/head'
import Header from '../Header.js'
import { Box } from '@chakra-ui/react'
import Footer from '../Footer.js'

const Main = ({ children, router }) => {
  return (
    <Box pb={8} display={'flex'} flexDirection={'column'} minHeight={'100vh'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daulet Anakhaev - Homepage</title>
      </Head>
      
      <Header>
        {router.asPath}
      </Header>

      <Box as='main' flex={'1 1 auto'} py={'4rem'}>
        {children}
      </Box>
      
      <Footer />
    </Box>
  )
}

export default Main
