import { useState, useEffect } from "react"

export enum keyType {
	"divide" = "/",
	"seven" = "7",
	"eight" = "8",
	"nine" = "9",
	"multiply" = "*",
	"four" = "4",
	"five" = "5",
	"six" = "6",
	"subtract" = "-",
	"one" = "1",
	"two" = "2",
	"three" = "3",
	"add" = "+",
	"point" = ".",
	"zero" = "0",
	"backspace" = "Backspace",
	"equals" = "=",
	"enter" = "Enter"
}

export default function useKeyPress(targetKey: keyType) {
	const [keyPressed, setKeyPressed] = useState<boolean>(false)

	function downHandler({ key }: { key: string }) {
		if (key === targetKey) setKeyPressed(true)
	}
	function upHandler({ key }: { key: string }) {
		if (key === targetKey) setKeyPressed(false)
	}

	useEffect(() => {
		window.addEventListener("keydown", downHandler)
		window.addEventListener("keyup", upHandler)

		return () => {
			window.removeEventListener("keydown", downHandler)
			window.removeEventListener("keyup", upHandler)
		}
	}, []) // Empty array ensures that effect is only run on mount and unmount
	return keyPressed
}
