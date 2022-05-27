import './App.css'
import WhoAreYou from './Components/WhoAreYou/WhoAreYou'
import Footer from './Components/Footer/Footer'
import { Route, useHistory } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Registration_volunteer from './Components/Registration/Registration_volunteer/Registration_volunteer'
import Registration_needy from './Components/Registration/Registration_needy/Registration_needy'
import Events from './Components/pages/events/Events'
import Main from './Components/pages/main/Main'
import EventItem from './Components/pages/event-item/EventItem'

function App() {
  // let history = useHistory()
  // history.push('/registration')

  return (
    <div className="App">
      <Route exact path={'/registration'} render={() => <WhoAreYou />} />
      <Route path={'/auth'} render={() => <Auth />} />
      <Route path={'/main'} render={() => <Main />} />
      <Route path={'/event-news'} render={() => <EventItem />} />
      <Route path={'/events'} render={() => <Events />} />
      <Route path={'/registration/volunteer'} render={() => <Registration_volunteer />} />
      <Route path={'/registration/needy'} render={() => <Registration_needy />} />
      {/* <Route path={'/'} render={() => <Footer />} /> */}
    </div>
  )
}
export default App
