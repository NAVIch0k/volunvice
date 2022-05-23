import './App.css';
import WhoAreYou from "./Components/WhoAreYou/WhoAreYou";
import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <WhoAreYou/>
            <Route path={'/'} render={()=><Footer/>}/>
            {/*<Route path='*' render={() => alert("404")}/>*/}
        </div>
    );
}

export default App;
