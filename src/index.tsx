// React stuff
import React from "react"
import ReactDOM from "react-dom/client"

// Styles
import "./index.css"

// Components
import App from "./App"

// Root
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

// Render
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
