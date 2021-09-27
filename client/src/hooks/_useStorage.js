import { useState, useEffect } from 'react'
import localforage from 'localforage'

export const useStorage = (key, init = null) => {

	const [ storage, setStorage ] = useState(init)

	const removeStorage = async () => {
		await localforage.removeItem(key)
		setStorage(null)
	}

	useEffect(() => {
		(async () => {
			try { setStorage((await localforage.getItem(key)) || init) }
			catch (error) { console.error(error) }
		})()
	}, [ key, init ])

	useEffect(() => {
		(async () => {
			try { await localforage.setItem(key, storage) }
			catch (error) { console.error(error) }
		})()
	}, [ key, storage ])

	return [ storage, setStorage, removeStorage ]
}

export default useStorage
