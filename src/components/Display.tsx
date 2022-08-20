// Interfaces
// Props of Display
interface DisplayProps {
	display: string
}

const Display = (props: DisplayProps) => (
	<div
		className="
			bg-black
			text-white
			grow
		"
	>
		{props.display}
	</div>
)

export default Display
