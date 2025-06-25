import { Routes,Route } from "react-router-dom"
import Header from "../component/Header"
import '../assets/css/Home.css'
import About from "./About"

export default function Home(){
return(
    <>
    <Header />
    <main className="container">
        <h1>Capture Your Moments</h1>
        <p>Create instant photobooth strips with fun filters</p>
        <p>and templates. No account needed!</p>
        <button>Start Taking Photos</button>
    </main>
    </>
)
}