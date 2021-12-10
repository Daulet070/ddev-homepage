import { Box, Button, HStack } from '@chakra-ui/react'
import { range } from '../utils'

const Pagination = ({ postCardsPerPage, totalPostsCard, paginate }) => {
  const pagesCount = Math.ceil(totalPostsCard / postCardsPerPage)
  const pageNumbers = range(1, pagesCount)

  return (
    <HStack as="ul" listStyleType={'none'} spacing={3}>
      {pageNumbers.map(number => (
        <Box as="li" key={number}>
          <Button
            padding={'.9rem'}
            backgroundColor={'teal.400'}
            cursor={'pointer'}
            _hover={{
              backgroundColor: 'teal.300'
            }}
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        </Box>
      ))}
    </HStack>
  )
}

export default Pagination
