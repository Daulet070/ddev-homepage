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
import { workDetails } from '../utils'

const DetailsModal = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Button onClick={onOpen}>Details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {workDetails[id].id.toFixed && workDetails[id].title}
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            {workDetails[id].id.toFixed && workDetails[id].desc}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DetailsModal
