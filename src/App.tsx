import React from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { store } from "./lib/redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
