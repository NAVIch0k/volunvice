import './App.css'
import WhoAreYou from './Components/WhoAreYou/WhoAreYou'
import Footer from './Components/Footer/Footer'
import { Route } from 'react-router-dom'
import Main from './Components/pages/main/Main'
import Profile from './Components/pages/profile/Profile'

function App() {
  return (
    <div className="App">
      {/* <WhoAreYou /> */}
      <Route path={'/main'} render={() => <Main />} />
      <Route path={'/profile'} render={() => <Profile />} />
      {/* <Route path={'/'} render={() => <Footer />} /> */}
      {/*<Route path='*' render={() => alert("404")}/>*/}
    </div>
  )
}

export default App
