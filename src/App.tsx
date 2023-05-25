import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import "./App.css";
import StudioBoard from "./Components/StudioBoard";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
      <StudioBoard />
    </>
  );
}

export default App;
