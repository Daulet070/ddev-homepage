import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Stack,
  SimpleGrid,
  useColorModeValue,
  FormErrorMessage,
  FormControl,
	createStandaloneToast
} from '@chakra-ui/react'
import { EmailIcon, ViewIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import axios from 'axios'

const ContactForm = () => {
	const toast = createStandaloneToast()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
				.required('Name required')
				.min(3, 'Short name'),
      email: Yup.string()
        .required('Email required')
        .email('Invalid email format'),
      phone: Yup.string()
        .required('Phone required')
        .phone('RU', true, 'Phone is invalid')
    }),
    onSubmit: (values, actions) => {
      axios
        .post(
          'https://sheet.best/api/sheets/1f3e3f6a-83e8-4fab-9550-a9a8dbddfa30',
          values
        )
        .then(response => {
					if (response.status !== 200) {
						toast({
							title: 'Уупс что пошоло не так',
							description: 'Попробуйте перезагрузить страницу',
							status: 'error',
							duration: 9000,
							isClosable: true,
						})
					} else {
						toast({
							title: 'Отправлено успешно',
							description: 'Ожидайте звонка )',
							status: 'success',
							duration: 9000,
							isClosable: true,
						})
					}
        })
      actions.resetForm()
    }
  })
  return (
    <SimpleGrid
      bg={useColorModeValue('#ffffffed', '#373772ad')}
      style={{ backdropFilter: 'blur(10px)' }}
      columns={[1, 2]}
      p={5}
      gridGap={4}
    >
      <Box w={'100%'}>
        <Heading mb={5} as="h2">
          Contact
        </Heading>
        <Stack direction={'column'} spacing={5}>
          <Text>Fill up the form to contact</Text>
          <Text>
            <EmailIcon /> anakhaev_web@vk.com
          </Text>
          <Text>
            <ViewIcon /> Nalhcik, Russia
          </Text>
        </Stack>
      </Box>
      <Box>
        <Box as="form" w={'100%'} onSubmit={formik.handleSubmit}>
          <SimpleGrid columns={1} gridGap={4}>
            <FormControl
              id="name"
              w={'100%'}
              isInvalid={formik.errors.name && formik.touched.name}
            >
              <Text as="span">Name</Text>
              <Input
                type="text"
                name="name"
                placeholder="John"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="email"
              w={'100%'}
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <Text as="span">Email</Text>
              <Input
                type="email"
                name="email"
                placeholder="examlple@mail.ru"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="phone"
              w={'100%'}
              isInvalid={formik.errors.phone && formik.touched.phone}
            >
              <Text as="span">Phone</Text>
              <Input
                className="chakra-inp"
                type="tel"
                name="phone"
                placeholder="+7..."
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>
            <Box display={'flex'} justifyContent={'center'}>
              <Button type="submit" bgColor={'teal'}>
                Submit
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </SimpleGrid>
  )
}

export default ContactForm
