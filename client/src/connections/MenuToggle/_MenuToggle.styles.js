import { chakra, Box } from '@chakra-ui/react'
import { Icon } from '../../components'
const { CloseIcon, HamburgerIcon } = Icon

export const MenuToggleBox = chakra(Box, {
	baseStyle: {
		cursor: 'pointer',
		display: 'block'
	}
})

export const Close = chakra(CloseIcon, {})
export const Open = chakra(HamburgerIcon, {
	baseStyle: { fontSize: '1.5em' }
})
