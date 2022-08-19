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

const App = () => {
	// States
	const [display, setDisplay] = useState(0)
	
	return (
		<>
			<Topbar />

			<div>
				<Display />
				<ButtonCluster />
			</div>
		</>
	)
}

export default App
