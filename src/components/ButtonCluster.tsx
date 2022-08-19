// Components
// Import CalcButton
import CalcButton from "./CalcButton"

const ButtonCluster = () => (
	<div
		className="
			grid
			grid-cols-4
			grid-rows-5
			gap-4
			p-4
		"
	>
		<CalcButton>C</CalcButton>

		<CalcButton>+/-</CalcButton>

		<CalcButton>%</CalcButton>

		<CalcButton accent>/</CalcButton>

		<CalcButton>7</CalcButton>

		<CalcButton>8</CalcButton>

		<CalcButton>9</CalcButton>

		<CalcButton accent>x</CalcButton>

		<CalcButton>4</CalcButton>

		<CalcButton>5</CalcButton>

		<CalcButton>6</CalcButton>

		<CalcButton accent>-</CalcButton>

		<CalcButton>1</CalcButton>

		<CalcButton>2</CalcButton>

		<CalcButton>3</CalcButton>

		<CalcButton accent>+</CalcButton>

		<CalcButton>0</CalcButton>

		<CalcButton>.</CalcButton>

		<CalcButton>del</CalcButton>

		<CalcButton accent2>=</CalcButton>
	</div>
)

export default ButtonCluster
