import { HStack, Switch } from '@chakra-ui/react'
import { SunIcon, MoonIcon} from '@chakra-ui/icons'

export const Toggle = () => {
  return (
    <HStack>
        <SunIcon />
        <Switch colorScheme={'blue'} defaultChecked/>
        <MoonIcon />
    </HStack>
  )
}
