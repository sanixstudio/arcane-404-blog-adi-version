import { useColorModeValue } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import NavLink from './_NavLink'

const NavLinkConnection = ({ children, to, activeProps }) => {

	const location = useLocation()
	const isActive = location.pathname === to
	const color = useColorModeValue('teal', 'silver')
	const active = { ...activeProps, color }

	if (isActive) return <NavLink to={ to } { ...active }>{ children }</NavLink>
	return <NavLink to={ to } _hover={{ color: 'silver' }}>{ children }</NavLink>
}

export default NavLinkConnection
