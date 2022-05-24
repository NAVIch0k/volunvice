import './App.css';
import WhoAreYou from "./Components/WhoAreYou/WhoAreYou";
import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import Auth from "./Components/Auth/Auth";

function App() {

    return (
        <div className="App">
            <Route exact path={'/'} render={() => <WhoAreYou/>}/>
            <Route path={'/auth'} render={() => <Auth/>}/>
            <Route path={'/'} render={() => <Footer/>}/>
        </div>
    );
}

export default App;
