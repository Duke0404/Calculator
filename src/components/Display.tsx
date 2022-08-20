// Interfaces
// Props of Display
interface DisplayProps {
	display: string
}

const Display = (props: DisplayProps) => (
	<div
		className="
			grow
			p-8
			text-5xl
		"
	>
		{props.display}
	</div>
)

export default Display
