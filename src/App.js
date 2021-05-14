import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
// import Loading from "./Loading";
import Gallery from './Gallery';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5*1000);
  }, [])

  const load = {
    width: "100%",
    height: "100vh",
    position: "absolute",
    content: "",
    top: "50%",
    left: "50%",
    display: "block",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    transform: "translate(-50%, -50%)",
  }

  return (
    <>
    {
      loading ? <h1 style={load}>Loading....</h1> : <div><h1 style={{ textAlign: "center", margin: "20px" }}>Image Gallery</h1>
      <Gallery /></div>
    }
    	
    </>
  );
}

export default App;
