import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen from "./Screen";
import Home from "./Home";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" exact element={<Screen />}></Route>
					<Route path="/leaderboard" exact element={<Home />}></Route>
					<Route path="/flappybird" exact element={<Screen />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
