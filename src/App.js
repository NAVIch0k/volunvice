import './App.css';
import WhoAreYou from "./Components/WhoAreYou/WhoAreYou";
import Footer from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Registration_volunteer from "./Components/Registration/Registration_volunteer/Registration_volunteer";
import Registration_needy from "./Components/Registration/Registration_needy/Registration_needy";
import Main from "./Components/pages/main/Main";
import Events from './Components/pages/events/Events'
import Profile from "./Components/pages/profile/Profile";
import {useEffect} from "react";
import {initialize_app} from "./store/AppInitialized";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { GetAllTypesAccount } from './store/TypeAccount';

function App() {

    const dispatch=useDispatch()
    const initialized = useSelector(state => state.app.initialized)

    useEffect(() => {
        dispatch(initialize_app())
        dispatch(GetAllTypesAccount())
    }, [])

    if (initialized) {
        return (
            <div className="App">
                <Route exact path={'/registration'} render={() => <WhoAreYou/>}/>
                <Route path={'/auth'} render={() => <Auth/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/events'} render={() => <Events/>}/>
                <Route path={'/registration/volunteer'} render={() => <Registration_volunteer/>}/>
                <Route path={'/registration/needy'} render={() => <Registration_needy/>}/>
                <Route exact path={'/'} render={() => <Main/>}/>
                <Footer/>
            </div>
        );
    }

}

export default App
