import './App.css';
import WhoAreYou from "./Components/WhoAreYou/WhoAreYou";
import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Registration_volunteer from "./Components/Registration/Registration_volunteer/Registration_volunteer";
import Registration_needy from "./Components/Registration/Registration_needy/Registration_needy";

function App() {

    return (
        <div className="App">
            <Route exact path={'/'} render={() => <WhoAreYou/>}/>
            <Route path={'/auth'} render={() => <Auth/>}/>
            <Route path={'/reg1'} render={() => <Registration_volunteer/>}/>
            <Route path={'/reg2'} render={() => <Registration_needy/>}/>
            <Route path={'/'} render={() => <Footer/>}/>
        </div>
    );
}

export default App;
