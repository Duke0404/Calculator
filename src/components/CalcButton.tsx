// Interfaces
// Props of CalcButton
interface calcButtonProps {
	children: React.ReactNode
	accent?: boolean
	accent2?: boolean
}

const CalcButton = (props: calcButtonProps) => (
	<button
		className={`
			flex
			items-center
			justify-center
			rounded-lg
			${props.accent && "bg-black text-white"}
			${props.accent2 && "bg-red-700"}
		`}
	>
		{props.children}
	</button>
)

export default CalcButton
