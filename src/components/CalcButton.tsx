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
// Enum for the different operations of the calculator
import { operation } from "./ButtonCluster"

// Interfaces
// Props of CalcButton
interface calcButtonProps {
	children: string
	type: buttonType
	accent?: number
	firstOperand: string
	setFirstOperand: (firstOperand: string) => void
	intFirst: boolean
	setIntFirst: (intFirst: boolean) => void
	secondOperand: string
	setSecondOperand: (secondOperand: string) => void
	intSecond: boolean
	setIntSecond: (intSecond: boolean) => void
	currentOperation: operation
	setCurrentOperation: (currentOperation: operation) => void
}

const CalcButton = (props: calcButtonProps) => {
	// Functions
	// Function to clear the states
	const clear = () => {
		props.setFirstOperand("")
		props.setSecondOperand("")
		props.setCurrentOperation(operation.none)
		props.setIntFirst(true)
		props.setIntSecond(true)
	}

	// Function to calculate the result
	const calculate = () => {
		if (
			props.firstOperand !== "" &&
			props.secondOperand !== "" &&
			props.currentOperation !== operation.none
		) {
			// Result
			switch (props.currentOperation) {
				case operation.add:
					props.setFirstOperand(`${+props.firstOperand + +props.secondOperand}`)
					break

				case operation.subtract:
					props.setFirstOperand(`${+props.firstOperand - +props.secondOperand}`)
					break

				case operation.multiply:
					props.setFirstOperand(`${+props.firstOperand * +props.secondOperand}`)
					break

				case operation.divide:
					props.setFirstOperand(`${+props.firstOperand / +props.secondOperand}`)
					break
			}

			// Set the second operand to undefined
			props.setSecondOperand("")
			// Set the operation to none
			props.setCurrentOperation(operation.none)
			// Set the int second to true
			props.setIntSecond(true)
			// Check if result is an integer
			if (Number(props.firstOperand) % 1 === 0) {
				// Set the int first to true
				props.setIntFirst(true)
			}
			// // Check if result is a positive number
			// if (Number(props.firstOperand) < 0) {
			// 	// Set the sign positive to false
			// 	props.setSignPositive(false)
			// 	// Invert the sign of the result
			// 	props.setFirstOperand()
			// }
			// else {
			// 	// Set the sign positive to true
			// 	props.setSignPositive(true)
			// }
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
		// Check the type of the button
		switch (props.type) {
			// If the button is a number
			case buttonType.number:
				// If the operation is undefined and the second operand is undefined
				if (props.currentOperation === operation.none && props.secondOperand === "") {
					// Append the number of the button to the first operand
					props.setFirstOperand(`${props.firstOperand}${props.children}`)
				}

				// If the first operand is defined and operation is defined
				else if (props.firstOperand !== "" && props.currentOperation !== operation.none) {
					// Append the number of the button to the second operand
					props.setSecondOperand(`${props.secondOperand}${props.children}`)
				}

				break

			// If the button is an operation
			case buttonType.operation:
				// If the first operand is defined and the operation is undefined and the second operand is undefined
				if (
					props.firstOperand !== "" &&
					props.currentOperation === operation.none &&
					props.secondOperand === ""
				) {
					// Check if last character of first operand is a point
					if (props.firstOperand.charAt(props.firstOperand.length - 1) === ".") {
						// Append 0 to the first operand
						props.setFirstOperand(`${props.firstOperand}0`)
					}

					// Set the operation to the operation of the button
					props.setCurrentOperation(getOperation() as operation)
				}

				break

			// If the button is a mono operation
			case buttonType.monoOperation:
				// If the first operand is defined and the operation is undefined and the second operand is undefined
				if (
					props.firstOperand !== "" &&
					props.currentOperation === operation.none &&
					props.secondOperand === ""
				) {
					// Set the operation & second operand to the operation of the button
					// If the operation is percent
					if (props.children === "%") {
						// Set the operation to divide
						props.setCurrentOperation(operation.divide)
						// Set the second operand to  100
						props.setSecondOperand("100")
						// Calculate the result
						calculate()
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
				// If first operand is defined & operation is undefined & the second operand is undefined
				if (
					props.firstOperand !== "" &&
					props.currentOperation === operation.none &&
					props.secondOperand === ""
				) {
					// Check if the first operand is a negative number
					if (props.firstOperand.charAt(0) === "-") {
						// Remove the sign from the first operand
						props.setFirstOperand(props.firstOperand.substring(1))
					}

					// Else if the first operand is a positive number
					else {
						// Add a sign to the first operand
						props.setFirstOperand(`-${props.firstOperand}`)
					}
				}

				// If the first operand is defined and the operation is defined and the second operand is defined
				else if (
					props.firstOperand !== "" &&
					props.currentOperation !== operation.none &&
					props.secondOperand !== ""
				) {
					// Check if the second operand is a negative number
					if (props.secondOperand.charAt(0) === "-") {
						// Remove the sign from the second operand
						props.setSecondOperand(props.secondOperand.substring(1))
					}

					// Else if the second operand is a positive number
					else {
						// Add a sign to the second operand
						props.setSecondOperand(`-${props.secondOperand}`)
					}
				}

				break

			// If the button is a point button
			case buttonType.point:
				// If the first operand is undefined & operation is undefined & the second operand is undefined & first operand is an integer
				if (
					props.firstOperand === "" &&
					props.currentOperation === operation.none &&
					props.secondOperand === "" &&
					props.intFirst
				) {
					// Set the first operand to 0.
					props.setFirstOperand("0.")
					// Set the int first to false
					props.setIntFirst(false)
				}

				// If the first operand is defined & operation is undefined & the second operand is undefined & the point first is false & the first operand is an integer
				else if (
					props.firstOperand !== "" &&
					props.currentOperation === operation.none &&
					props.secondOperand === "" &&
					props.intFirst
				) {
					// Append the point to the first operand
					props.setFirstOperand(`${props.firstOperand}.`)
					// Set the int first to false
					props.setIntFirst(false)
				}

				// If the first operand is defined & operation is defined & the second operand is undefined & the second operand is an integer
				else if (
					props.firstOperand !== "" &&
					props.currentOperation !== operation.none &&
					props.secondOperand === "" &&
					props.intSecond
				) {
					// Set the second operand to 0.
					props.setSecondOperand("0.")
					// Set the int first to false
					props.setIntSecond(false)
				}

				// If the first operand is defined & operation is defined & the second operand is defined & the second operand is an integer
				else if (
					props.firstOperand !== "" &&
					props.currentOperation !== operation.none &&
					props.secondOperand !== "" &&
					props.intSecond
				) {
					// Append the point to the second operand
					props.setSecondOperand(`${props.secondOperand}.`)
					// Set the int first to false
					props.setIntSecond(false)
				}

				break

			// If the button is a delete / backspace button
			case buttonType.delete:
				// If the first operand is defined & the operation is undefined & the second operand is undefined
				if (
					props.firstOperand !== "" &&
					props.currentOperation === operation.none &&
					props.secondOperand === ""
				) {
					if (props.firstOperand.toString().length > 0) {
						// Set the first operand to the first operand without the last character
						props.setFirstOperand(props.firstOperand.slice(0, -1))
					}
				}

				// If the first operand is defined and the operation is defined and the second operand is defined
				else if (
					props.firstOperand !== "" &&
					props.currentOperation !== operation.none &&
					props.secondOperand !== ""
				) {
					if (props.secondOperand.length > 1) {
						// Set the second operand to the second operand without the last character
						props.setSecondOperand(props.secondOperand.slice(0, -1))
					} else {
						// Set the second operand to undefined
						props.setSecondOperand("")
					}
				}

				break

			// If the button is an equals button
			case buttonType.equals:
				// Check if last character of the second operand is a point
				if (props.secondOperand.charAt(props.secondOperand.length - 1) === ".") {
					// Append a 0 to the second operand
					props.setSecondOperand(`${props.secondOperand}0`)
				}

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
				rounded-2xl
				text-2xl
				portrait:py-2
				portrait:sm:py-5
				portrait:md:py-16
				landscape:px-2
				landscape:sm:px-5
				landscape:lg:px-11
				h-full
				shadow-lg
				hover:shadow-2xl
				${
					props.accent === 1
						? "bg-accent-prime text-white"
						: props.accent === 2
						? "bg-accent-sec text-white"
						: props.accent === 3
						? "bg-accent-tert text-white"
						: "bg-background-2 dark:bg-background-2-dark"
				}
				hover:text-background-3
				hover:bg-background-3-dark
				active:bg-background-2-dark
			`}
			onClick={() => handleClick()}
		>
			{props.children}
		</button>
	)
}

export default CalcButton
