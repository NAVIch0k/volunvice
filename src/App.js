<<<<<<< HEAD
import './App.css';
import WhoAreYou from "./Components/WhoAreYou/WhoAreYou";
import Footer from "./Components/Footer/Footer";
import {Route, useHistory} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Registration_volunteer from "./Components/Registration/Registration_volunteer/Registration_volunteer";
import Registration_needy from "./Components/Registration/Registration_needy/Registration_needy";

function App() {

    let history=useHistory()
    history.push('/registration')

    return (
        <div className="App">
            <Route exact path={'/registration'} render={() => <WhoAreYou/>}/>
            <Route path={'/auth'} render={() => <Auth/>}/>
            <Route path={'/registration/volunteer'} render={() => <Registration_volunteer/>}/>
            <Route path={'/registration/needy'} render={() => <Registration_needy/>}/>
            <Route path={'/'} render={() => <Footer/>}/>
        </div>
    );
// =======
// import './App.css'
// import WhoAreYou from './Components/WhoAreYou/WhoAreYou'
// import Footer from './Components/Footer/Footer'
// import { Route } from 'react-router-dom'
// import Main from './Components/pages/main/Main'
// import Profile from './Components/pages/profile/Profile'
//
// function App() {
//   return (
//     <div className="App">
//       {/* <WhoAreYou /> */}
//       <Route path={'/main'} render={() => <Main />} />
//       <Route path={'/profile'} render={() => <Profile />} />
//       {/* <Route path={'/'} render={() => <Footer />} /> */}
//       {/*<Route path='*' render={() => alert("404")}/>*/}
//     </div>
//   )
// >>>>>>> origin/mainpage
// }
//
// export default App
