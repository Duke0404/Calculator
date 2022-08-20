// React stuff
// import useState
import { useState } from "react"

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
	display: string
	setDisplay: (display: string) => void
}

const ButtonCluster = (props: ButtonClusterProps) => {
	// States
	// State to hold first operand
	const [firstOperand, setFirstOperand] = useState<number | undefined>(undefined)
	// State to hold the sign of the first operand
	const [signPositive, setSignPositive] = useState(true)
	// State to hold the decimal point state of the first operand
	const [pointFirst, setPointFirst] = useState(false)
	// State to hold whether the first operand is an integer
	const [intFirst, setIntFirst] = useState(true)
	// State to hold second operand
	const [secondOperand, setSecondOperand] = useState<number | undefined>(undefined)
	// State to hold the decimal point state of the second operand
	const [pointSecond, setPointSecond] = useState(false)
	// State to hold whether the second operand is an integer
	const [intSecond, setIntSecond] = useState(true)
	// State to hold the current operation
	const [currentOperation, setCurrentOperation] = useState(operation.none)

	return (
		<div
			className="
				grid
				grid-cols-4
				grid-rows-5
				gap-4
				p-4
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
