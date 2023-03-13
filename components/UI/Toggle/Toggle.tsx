import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon} from '@chakra-ui/icons'

export const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
        <SunIcon />
        <Switch colorScheme={'blue'} defaultChecked onChange={toggleColorMode}/>
        <MoonIcon />
    </HStack>
  )
}
