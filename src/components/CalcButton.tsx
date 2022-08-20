// Enumeraations
// Enum for the different buttons of the calculator
export enum buttonType {
	number,
	operation,
	monoOperation,
	clear,
	signChange,
	point,
	delete,
	equals
}
import { clear } from "console"
// Enum for the different operations of the calculator
import { operation } from "./ButtonCluster"

// Interfaces
// Props of CalcButton
interface calcButtonProps {
	children: string
	type: buttonType
	accent?: boolean
	accent2?: boolean
	firstOperand: number | undefined
	setFirstOperand: (firstOperand: number | undefined) => void
	signPositive: boolean
	setSignPositive: (signPositive: boolean) => void
	pointFirst: boolean
	setPointFirst: (pointFirst: boolean) => void
	intFirst: boolean
	setIntFirst: (intFirst: boolean) => void
	secondOperand: number | undefined
	setSecondOperand: (secondOperand: number | undefined) => void
	pointSecond: boolean
	setPointSecond: (pointSecond: boolean) => void
	intSecond: boolean
	setIntSecond: (intSecond: boolean) => void
	currentOperation: operation
	setCurrentOperation: (currentOperation: operation) => void
}

const CalcButton = (props: calcButtonProps) => {
	// Functions
	// Function to clear the states
	const clear = () => {
		props.setFirstOperand(undefined)
		props.setSecondOperand(undefined)
		props.setCurrentOperation(operation.none)
	}

	// Function to calculate the result
	const calculate = () => {
		if (
			props.firstOperand !== undefined &&
			props.secondOperand !== undefined &&
			props.currentOperation !== operation.none
		) {
			// first operand with sign
			const firstOperandWithSign = props.signPositive
				? props.firstOperand
				: -props.firstOperand

			// Result
			switch (props.currentOperation) {
				case operation.add:
					props.setFirstOperand(firstOperandWithSign + props.secondOperand)
					break

				case operation.subtract:
					props.setFirstOperand(firstOperandWithSign - props.secondOperand)
					break

				case operation.multiply:
					props.setFirstOperand(firstOperandWithSign * props.secondOperand)
					break

				case operation.divide:
					props.setFirstOperand(firstOperandWithSign / props.secondOperand)
					break
			}

			// Set the second operand to undefined
			props.setSecondOperand(undefined)
			// Set the operation to none
			props.setCurrentOperation(operation.none)
			// set the point first to false
			props.setPointFirst(false)
			// Set the point second to false
			props.setPointSecond(false)
			// Set the int second to true
			props.setIntSecond(true)
			// Check if result is an integer
			if (props.firstOperand % 1 === 0) {
				// Set the int first to true
				props.setIntFirst(true)
			}
		}
	}

	// Function to get type of operation
	const getOperation = () => {
		switch (props.children) {
			// Addition
			case "+":
				return operation.add

			// Subtraction
			case "-":
				return operation.subtract

			// Multiplication
			case "x":
				return operation.multiply

			// Division
			case "/":
				return operation.divide
		}
	}

	// Function to handle click event of the button
	const handleClick = () => {
		console.log(props.children)

		// Check the type of the button
		switch (props.type) {
			// If the button is a number
			case buttonType.number:
				// If the first operand is undefined
				if (props.firstOperand === undefined) {
					// Set the first operand to the number of the button
					props.setFirstOperand(+props.children)
				}

				// If the first operand is defined but operation is undefined
				else if (
					props.firstOperand !== undefined &&
					props.currentOperation === operation.none
				) {
					// Append the number of the button to the first operand
					props.setFirstOperand(
						+`${props.firstOperand}${props.pointFirst && "."}${props.children}`
					)
				}

				// If the first operand is defined and operation is defined but the second operand is undefined
				else if (
					props.firstOperand !== undefined &&
					props.currentOperation !== operation.none &&
					props.secondOperand === undefined
				) {
					// Set the second operand to the number of the button
					props.setSecondOperand(+props.children)
				}

				// If the first operand is defined and operation is defined and the second operand is defined
				else if (
					props.firstOperand !== undefined &&
					props.currentOperation !== operation.none &&
					props.secondOperand !== undefined
				) {
					// Append the number of the button to the second operand
					props.setSecondOperand(
						+`${props.secondOperand}${props.pointSecond && "."}${props.children}`
					)
				}

				break

			// If the button is an operation
			case buttonType.operation:
				// If the first operand is defined and the operation is undefined
				if (props.firstOperand !== undefined) {
					// Set the operation to the operation of the button
					props.setCurrentOperation(getOperation() as operation)
				}

				break

			// If the button is a mono operation
			case buttonType.monoOperation:
				// If the first operand is defined and the operation is undefined
				if (props.firstOperand !== undefined) {
					// Set the operation & second operand to the operation of the button
					// If the operation is percent
					if (props.children === "%") {
						// Set the operation to divide
						props.setCurrentOperation(operation.divide)
						// Set the second operand to  100
						props.setSecondOperand(100)
					}
				}

				break

			// If the button is a clear button
			case buttonType.clear:
				// Clear all states
				clear()
				break

			// If the button is a sign change button
			case buttonType.signChange:
				// If  operation is undefined & the second operand is undefined
				if (
					props.currentOperation === operation.none &&
					props.secondOperand === undefined
				) {
					// Set sign positive to the opposite of the sign positive
					props.setSignPositive(!props.signPositive)
				}

				break

			// If the button is a point button
			case buttonType.point:
				// If the first operand is undefined & the point first is false
				if (props.firstOperand === undefined && !props.pointFirst && props.intFirst) {
					// Set the first operand to 0
					props.setFirstOperand(0)
					// Set the point first to true
					props.setPointFirst(true)
					// Set the int first to false
					props.setIntFirst(false)
				}

				// If the first operand is defined but operation is undefined & the point first is false
				else if (
					props.firstOperand !== undefined &&
					props.currentOperation === operation.none &&
					!props.pointFirst &&
					props.intFirst
				) {
					// Set the point first to true
					props.setPointFirst(true)
					// Set the int first to false
					props.setIntFirst(false)
				}

				// If the first operand is defined and operation is defined but the second operand is undefined
				else if (
					props.firstOperand !== undefined &&
					props.currentOperation !== operation.none &&
					props.secondOperand === undefined &&
					!props.pointSecond &&
					props.intSecond
				) {
					// Set the second operand to 0
					props.setSecondOperand(0)
					// Set the point second to true
					props.setPointSecond(true)
					// Set the int first to false
					props.setIntSecond(false)
				}

				// If the first operand is defined and operation is defined and the second operand is defined
				else if (
					props.firstOperand !== undefined &&
					props.currentOperation !== operation.none &&
					props.secondOperand !== undefined &&
					!props.pointSecond &&
					props.intSecond
				) {
					// Set the point second to true

					props.setPointSecond(true)
					// Set the int first to false
					props.setIntSecond(false)
				}

				break

			// If the button is a delete / backspace button
			case buttonType.delete:
				// If the first operand is defined and the operation is undefined
				if (props.firstOperand !== undefined && props.currentOperation === operation.none) {
					if (props.firstOperand.toString().length > 1) {
						// Set the first operand to the first operand without the last character
						props.setFirstOperand(+props.firstOperand.toString().slice(0, -1))
					} else {
						// Set the first operand to undefined
						props.setFirstOperand(undefined)
					}
				}

				// If the first operand is defined and the operation is defined and the second operand is defined
				else if (
					props.firstOperand !== undefined &&
					props.currentOperation !== operation.none &&
					props.secondOperand !== undefined
				) {
					if (props.secondOperand.toString().length > 1) {
						// Set the second operand to the second operand without the last character
						props.setSecondOperand(+props.secondOperand.toString().slice(0, -1))
					} else {
						// Set the second operand to undefined
						props.setSecondOperand(undefined)
					}
				}

				break

			// If the button is an equals button
			case buttonType.equals:
				// Set the first operand to the result of the operation
				calculate()
				break
		}
	}

	return (
		<button
			className={`
				flex
				items-center
				justify-center
				rounded-lg
				${props.accent && "bg-black text-white"}
				${props.accent2 && "bg-red-700"}
			`}

			onClick={() => handleClick()}
		>
			{props.children}
		</button>
	)
}

export default CalcButton
