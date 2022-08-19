// Interfaces
// Props of CalcButton
interface calcButtonProps {
	children: React.ReactNode
}

const CalcButton = (props: calcButtonProps) => (
	<button
		className="
			flex
		"
	>
		{props.children}
	</button>
)

export default CalcButton
