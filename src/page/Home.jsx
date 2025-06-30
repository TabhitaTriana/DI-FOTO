import { Routes,Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../assets/css/Home.css';

export default function Home(){
    const navigate = useNavigate(); 

  const goToCamera = () => {
    navigate('/camera'); 
  };
return(
    <>
    <main className="container">
        <h1>Capture Your Moments</h1>
        <p>Create instant photobooth strips with fun filters</p>
        <p>and templates. No account needed!</p>
        <button onClick={() => navigate("/camera")}>Start Taking Photos</button>
    </main>
    </>
)
}