import { SimpleGrid, Box } from '@chakra-ui/react'

const SlillList = props => {
  return (
    <SimpleGrid
      as="ul"
      columns={[1, 2]}
      spacing={[2]}
      py={2}
      listStyleType="none"
    >
      {props.skills.map(item => (
        <Box
          key={item.id}
          as="li"
          w="100%"
          padding=".5em"
          border="1px solid #9d9d9d"
        >
          {item.description}
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default SlillList
