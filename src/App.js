import './App.css';
import NavBar from "./components/NavBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <div className="App">
           <div class="navbar navbar-expand-lg bg-light">
            <NavBar/>
           </div>
        </div>
    );
}

export default App;
