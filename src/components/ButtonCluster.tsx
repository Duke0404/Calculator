// React stuff
// import useState & useEffect
import { useState, useEffect } from "react"

// Components
// Import CalcButton
import CalcButton from "./CalcButton"

// Enumerations
// Enum for the different operations of the calculator
export enum operation {
	none,
	add,
	subtract,
	multiply,
	divide
}
// Enum for the different buttons of the calculator
import { buttonType } from "./CalcButton"

// Interfaces
// Props of ButtonCluster
interface ButtonClusterProps {
	setDisplay: (display: string) => void
}

const ButtonCluster = (props: ButtonClusterProps) => {
	// States
	// State to hold first operand
	const [firstOperand, setFirstOperand] = useState("")
	// State to hold the sign of the first operand
	const [signPositive, setSignPositive] = useState(true)
	// State to hold the decimal point state of the first operand
	const [pointFirst, setPointFirst] = useState(false)
	// State to hold whether the first operand is an integer
	const [intFirst, setIntFirst] = useState(true)
	// State to hold second operand
	const [secondOperand, setSecondOperand] = useState("")
	// State to hold the decimal point state of the second operand
	const [pointSecond, setPointSecond] = useState(false)
	// State to hold whether the second operand is an integer
	const [intSecond, setIntSecond] = useState(true)
	// State to hold the current operation
	const [currentOperation, setCurrentOperation] = useState(operation.none)

	// Get the display version of the first operation
	let operationDisplay = ""
	switch (currentOperation) {
		case operation.add:
			operationDisplay = "+"
			break

		case operation.subtract:
			operationDisplay = "-"
			break

		case operation.multiply:
			operationDisplay = "*"
			break

		case operation.divide:
			operationDisplay = "/"
			break
	}

	// Effects
	// Effect to drive the display
	useEffect(() => {
		props.setDisplay(
			`${signPositive ? " " : "-"}${firstOperand ? firstOperand : ""} ${
				currentOperation ? operationDisplay : ""
			} ${secondOperand ? secondOperand : ""}`
		)
	}, [firstOperand, secondOperand, currentOperation, signPositive])

	return (
		<div
			className="
				grid
				grid-cols-4
				grid-rows-5
				items-center
				justify-center
				gap-4
				p-4
				bg-background-3
				rounded-t-3xl
				landscape:rounded-3xl
				landscape:m-4
			"
		>
			<CalcButton
				type={buttonType.clear}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				C
			</CalcButton>

			<CalcButton
				type={buttonType.signChange}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				+/-
			</CalcButton>

			<CalcButton
				type={buttonType.operation}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				%
			</CalcButton>

			<CalcButton
				type={buttonType.operation}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
				accent
			>
				/
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				7
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				8
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				9
			</CalcButton>

			<CalcButton
				type={buttonType.operation}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
				accent
			>
				x
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				4
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				5
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				6
			</CalcButton>

			<CalcButton
				type={buttonType.operation}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
				accent
			>
				-
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				1
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				2
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				3
			</CalcButton>

			<CalcButton
				type={buttonType.operation}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
				accent
			>
				+
			</CalcButton>

			<CalcButton
				type={buttonType.number}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				0
			</CalcButton>

			<CalcButton
				type={buttonType.point}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				.
			</CalcButton>

			<CalcButton
				type={buttonType.delete}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
			>
				del
			</CalcButton>

			<CalcButton
				type={buttonType.equals}
				firstOperand={firstOperand}
				setFirstOperand={setFirstOperand}
				signPositive={signPositive}
				pointFirst={pointFirst}
				setPointFirst={setPointFirst}
				intFirst={intFirst}
				setIntFirst={setIntFirst}
				setSignPositive={setSignPositive}
				secondOperand={secondOperand}
				setSecondOperand={setSecondOperand}
				pointSecond={pointSecond}
				setPointSecond={setPointSecond}
				intSecond={intSecond}
				setIntSecond={setIntSecond}
				currentOperation={currentOperation}
				setCurrentOperation={setCurrentOperation}
				accent2
			>
				=
			</CalcButton>
		</div>
	)
}

export default ButtonCluster
