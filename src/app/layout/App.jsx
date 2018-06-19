import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import EventDetailedPage from '../../features//events/EventDetailed/EventDetailedPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import EventForm from '../../features/events/EventForm/EventForm'
import TestComponent from '../../features/testarea/TestComponent'
import ModalManager from '../../features/modals/ModalManager'

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager/>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
        <div>
          <NavBar/>
          <Container className="main">
            <Route path='/events' component={EventDashboard} />
            <Route path='/test' component={TestComponent} />
            <Route path='/event/:id' component={EventDetailedPage} />
            <Route path='/manage/:id' component={EventForm} />
            <Route path='/people' component={PeopleDashboard} />
            <Route path='/profile/:id' component={UserDetailed} />
            <Route path='/settings' component={SettingsDashboard} />
            <Route path='/createEvent' component={EventForm} />
          </Container>
        </div>
          )}
        />
      </div>
    );
  }
}

export default App;
