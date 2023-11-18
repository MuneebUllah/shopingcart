import "./App.css";
import Routing from "./Routes/Routing";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
