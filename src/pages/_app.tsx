import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  SimpleGrid,
  ChakraProvider,
  Center,
  Radio,
  RadioGroup,
  Stack,

  useDisclosure,

  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import initialGames from './games.json'

import theme from '../theme'

function MyApp() {

  const [games, setGames] = useState(initialGames)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [groupValue, setValue] = React.useState('1')

  return (
    <Main textAlign="center" fontSize="xl" border={'100px'}>
      <ChakraProvider resetCSS theme={theme}>
        <Box>
          <Heading marginBottom={'25px'} marginTop={'25px'}>
            Мой список пройденных игр
          </Heading>
        </Box>
        <Box>
          <Input
            marginBottom={'25px'}
            width={'50%'}
            placeholder={'Название игры'}>
          </Input>
        </Box>
        <Center>
          <Box>
            <RadioGroup onChange={setValue} value={groupValue} marginBottom={'25px'}>
              <Stack direction='row' >
                <Radio value='1'>Все</Radio>
                <Radio value='2'>Шедевр</Radio>
                <Radio value='3'>Советую</Radio>
                <Radio value='4'>Так себе</Radio>
                <Radio value='5'>Под пиво</Radio>
                <Radio value='6'>Ужастно</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Center>
        <Center h={'100%'}>
          <SimpleGrid columns={4} spacing={5}>
            {games.map(({ id }) => (
              <Box>
                <Image src={games[id].imageUrl} onClick={onOpen} />
                <Box>
                  {games[id].title}
                </Box>
                <Box >
                  {games[id].rating}
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Center>
      </ChakraProvider>
    </Main>
  )
}

const Main = styled(Box)`
  height: inherit;
  flex: auto;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  `

export default MyApp
