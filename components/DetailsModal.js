import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'

const DetailsModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Details</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Modal Title
                    </ModalHeader>
                    
                    <ModalCloseButton />
                    
                    <ModalBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Hic ducimus sint maiores. 
                        Aliquam et similique repellat accusantium sit minima autem ex ducimus necessitatibus tempore odit blanditiis, fugiat est quas sunt.
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default DetailsModal;