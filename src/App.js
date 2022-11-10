import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar/navBar";

import ItemListContainer from "./containers/ItemListContainer/itemListContainer";

function App() {
    return (
        <div className="App">

            <NavBar/>
            <ItemListContainer greeting={"Hola ! Bienvenidos a mi E-Commerce"}/>

        </div>
    );
}

export default App;


