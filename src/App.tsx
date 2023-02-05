import { useState, useEffect } from "react"

import { HiBackspace } from "react-icons/hi"
import { BsDot } from "react-icons/bs"
import { RiCloseFill, RiDivideFill, RiAddFill, RiSubtractFill } from "react-icons/ri"
import { TbEqual } from "react-icons/tb"

import Display from "./display"
import useKeyPress, { keyType } from "./hooks/useKeyPress"

export default function App() {
	const [equation, setEquation] = useState("")
	const [history, setHistory] = useState<string[]>([])

	function clear() {
		setEquation("")
	}

	function append(input: string) {
		setEquation(current => current + input)
	}

	function backspace() {
		setEquation(current => current.slice(0, -1))
	}

	function addPoint() {
		if (equation.length === 0) setEquation("0.")
		else if (equation[equation.length - 1] === ".") return
		else if (testNumber(equation[equation.length - 1])) setEquation(current => current + ".")
		else setEquation(current => current + "0.")
	}

	const testNumber = (number: string) => RegExp(/^-?\d+\.?\d*$/).test(number)
	const splitLastOccurrence = (input: string, substring: string) => [
		input.slice(0, input.lastIndexOf(substring)),
		input.slice(input.lastIndexOf(substring) + 1)
	]

	function calculate(input = equation): string {
		if (testNumber(input)) return input
		else if (input.includes("+")) {
			const [a, b] = splitLastOccurrence(input, "+")
			return (+calculate(a) + +calculate(b)).toString()
		} else if (input.includes("-")) {
			const [a, b] = splitLastOccurrence(input, "-")
			return (+calculate(a) - +calculate(b)).toString()
		} else if (input.includes("*")) {
			const [a, b] = splitLastOccurrence(input, "*")
			return (+calculate(a) * +calculate(b)).toString()
		} else if (input.includes("/")) {
			const [a, b] = splitLastOccurrence(input, "/")
			return (+calculate(a) / +calculate(b)).toString()
		} else return ""
	}

	const divideKey = useKeyPress(keyType.divide)
	const sevenKey = useKeyPress(keyType.seven)
	const eightKey = useKeyPress(keyType.eight)
	const nineKey = useKeyPress(keyType.nine)
	const multiplyKey = useKeyPress(keyType.multiply)
	const fourKey = useKeyPress(keyType.four)
	const fiveKey = useKeyPress(keyType.five)
	const sixKey = useKeyPress(keyType.six)
	const subtractKey = useKeyPress(keyType.subtract)
	const oneKey = useKeyPress(keyType.one)
	const twoKey = useKeyPress(keyType.two)
	const threeKey = useKeyPress(keyType.three)
	const addKey = useKeyPress(keyType.add)
	const pointKey = useKeyPress(keyType.point)
	const zeroKey = useKeyPress(keyType.zero)
	const backspaceKey = useKeyPress(keyType.backspace)
	const equalKey = useKeyPress(keyType.equals) || useKeyPress(keyType.enter)

	function handleKeyPress() {
		if (divideKey) append("/")
		if (sevenKey) append("7")
		if (eightKey) append("8")
		if (nineKey) append("9")
		if (multiplyKey) append("*")
		if (fourKey) append("4")
		if (fiveKey) append("5")
		if (sixKey) append("6")
		if (subtractKey) append("-")
		if (oneKey) append("1")
		if (twoKey) append("2")
		if (threeKey) append("3")
		if (addKey) append("+")
		if (pointKey) addPoint()
		if (zeroKey) append("0")
		if (backspaceKey) backspace()
		if (equalKey) {
			setHistory(current => [...current, equation])
			setEquation(calculate())
		}
	}

	useEffect(() => {
		handleKeyPress()
	}, [
		divideKey,
		sevenKey,
		eightKey,
		nineKey,
		multiplyKey,
		fourKey,
		fiveKey,
		sixKey,
		subtractKey,
		oneKey,
		twoKey,
		threeKey,
		addKey,
		pointKey,
		zeroKey,
		backspaceKey,
		equalKey
	])

	const buttonStyle =
		"flex items-center justify-center rounded-2xl text-2xl py-2  h-full shadow-lg hover:shadow-3xl dark:text-white"

	return (
		<>
			<Display value={equation} />

			{/* <input
				type="text"
				value={equation}
				onChange={e => setEquation(e.target.value)}
			/> */}

			<div
				className="grid grid-rows-5 grid-cols-4 items-center
				justify-center
				gap-4
				w-full"
			>
				<button
					onClick={clear}
					className={buttonStyle + " col-span-3 bg-blue-400 text-white"}
				>
					Clear
				</button>
				<button
					onClick={() => append("/")}
					className={buttonStyle + " bg-pink-500 text-white"}
				>
					<RiDivideFill />
				</button>

				<button
					onClick={() => append("7")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					7
				</button>
				<button
					onClick={() => append("8")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					8
				</button>
				<button
					onClick={() => append("9")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					9
				</button>
				<button
					onClick={() => append("*")}
					className={buttonStyle + " bg-pink-500 text-white"}
				>
					<RiCloseFill />
				</button>

				<button
					onClick={() => append("4")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					4
				</button>
				<button
					onClick={() => append("5")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					5
				</button>
				<button
					onClick={() => append("6")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					6
				</button>
				<button
					onClick={() => append("-")}
					className={buttonStyle + " bg-pink-500 text-white"}
				>
					<RiSubtractFill />
				</button>

				<button
					onClick={() => append("1")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					1
				</button>
				<button
					onClick={() => append("2")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					2
				</button>
				<button
					onClick={() => append("3")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					3
				</button>
				<button
					onClick={() => append("+")}
					className={buttonStyle + " bg-pink-500 text-white"}
				>
					<RiAddFill />
				</button>

				<button
					onClick={addPoint}
					className={buttonStyle + " bg-blue-400 text-white"}
				>
					<BsDot />
				</button>
				<button
					onClick={() => append("0")}
					className={buttonStyle + " bg-slate-100 dark:bg-zinc-900"}
				>
					0
				</button>
				<button
					onClick={backspace}
					className={buttonStyle + " bg-blue-400 text-white"}
				>
					<HiBackspace className="mr-px" />
				</button>
				<button
					onClick={() => {
						setHistory(current => [...current, equation])
						setEquation(current => calculate(current))
					}}
					className={buttonStyle + " bg-indigo-700 text-white"}
				>
					<TbEqual />
				</button>
			</div>
		</>
	)
}
