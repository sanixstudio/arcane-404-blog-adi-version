import React from 'react'
import {
	AccountBox,
	AccountButton,
	AccountIcon,
	AccountLine,
	AccountList,
	AccountItem,
	AccountPath
} from './_Account.styles'

export default function Account ({ children, ...props }) {
	return <AccountBox { ...props }>{ children }</AccountBox>
}

Account.Button = function AButton ({ children, ...props }) {
	return <AccountButton { ...props }>{ children }</AccountButton>
}

Account.Icon = function AIcon (props) {
	return <AccountIcon { ...props } />
}

Account.Line = function ALine (props) {
	return <AccountLine { ...props } />
}

Account.List = function AList ({ children, ...props }) {
	return <AccountList { ...props }>{ children }</AccountList>
}

Account.Item = function AItem ({ children, ...props }) {
	return <AccountItem { ...props }>{ children }</AccountItem>
}

Account.Path = function APath ({ children, ...props }) {
	return <AccountPath { ...props }>{ children }</AccountPath>
}
