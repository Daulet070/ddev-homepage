import { 
    SimpleGrid,
    Box
} from '@chakra-ui/react'

const SlillList = (props) => {
    return (
        <SimpleGrid
            as="ul"
            columns={[1, 2]}
            spacing={[2]}
            py={2}
            listStyleType="none"
        >
            {props.skills.map((item) =>
                <Box
                    key={item.id}
                    as="li" 
                    w='100%' 
                    padding='.5em' 
                    bg='orange.400'
                    border="1px solid #ccc"
                >
                    {item.description}
                </Box>
            )}
        </SimpleGrid>
    )
}

export default SlillList
