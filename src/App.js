// import { Provider } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";

// import { getStore } from "./redux";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About Us/About";
import { Reward } from "./Pages/Reward/Reward";
// import "bootstrap/dist/css/bootstrap.min.css";
// const store = getStore();
function App() {
    return (
        // <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/reward" element={<Reward />}></Route>
                <Route path="/login" element={<Reward />}></Route>
            </Routes>
        </HashRouter>
        // </Provider>
    );
}

export default App;
