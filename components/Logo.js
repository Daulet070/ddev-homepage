import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Text } from '@chakra-ui/layout'

const LogoBox = styled.span`
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &: hover img {
        transform: rotate(20deg);
    }
`
const Logo = () => {
    const footPrintImg = `/images/contents/footprint1${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/" >
            <a>
                <LogoBox >
                    <Image src={footPrintImg} width={30} height={30} alt='Logo' />
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rouded 1c' 
                        fontWeight='bold' 
                        ml={3}
                    >
                        DDev
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo