import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDetailedPage from "../../features//events/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/events/EventForm/EventForm";
import TestComponent from "../../features/testarea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";
import { UserIsAuthenticated } from "../../features/auth/authWrapper";

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/test" component={TestComponent} />
                <Route path="/event/:id" component={EventDetailedPage} />
                <Route
                  path="/manage/:id"
                  component={UserIsAuthenticated(EventForm)}
                />
                <Route
                  path="/people"
                  component={UserIsAuthenticated(PeopleDashboard)}
                />
                <Route
                  path="/profile/:id"
                  component={UserIsAuthenticated(UserDetailedPage)}
                />
                <Route
                  path="/settings"
                  component={UserIsAuthenticated(SettingsDashboard)}
                />
                <Route
                  path="/createEvent"
                  component={UserIsAuthenticated(EventForm)}
                />
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
