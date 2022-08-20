// React stuff
// import useState
import { useState } from "react"

// Components
// Import Display
import Display from "./components/Display"
// Import ButtonCluster
import ButtonCluster from "./components/ButtonCluster"

const App = () => {
	// States
	// State to hold the result of the calculation
	const [display, setDisplay] = useState("")

	return (
		<main
			className="
				flex
				flex-col
				landscape:flex-row
				grow
			"
		>
			<Display display={display} />
			<ButtonCluster setDisplay={setDisplay} />
		</main>
	)
}

export default App
