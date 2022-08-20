// React stuff
// import useState
import { useState } from "react"

// Components
// Import Display
import Display from "./components/Display"
// Import ButtonCluster
import ButtonCluster from "./components/ButtonCluster"
// Import Topbar
import Topbar from "./components/Topbar"

// Enumerations
// Enum for the different operations of the calculator
import { operation } from "./components/ButtonCluster"

const App = () => {
	// States
	// State to hold the result of the calculation
	const [display, setDisplay] = useState("")

	return (
		<>
			<Topbar />

			<main
				className="
					flex
					flex-col
					grow
				"
			>
				<Display display={display} />
				<ButtonCluster setDisplay={setDisplay} />
			</main>
		</>
	)
}

export default App
