import React from 'react';
import NavigationBar from './NavigationBar'
import Main from "./Main";
import { Router, Switch, Route, Redirect} from "react-router-dom";
import SignupPage from './signupPage/SignupPage'
import history from '../history'
import FlashMessagesList from './flash/FlashMessagesList'
import LoginPage from './login/LoginPage'
import NewEventPage from './events/NewEventPage'
import requireAuth from "../util/requireAuth";
import './bootstrap.css';
import Task from "./Task";
import Test from "../pages/Test";
import Course from "./Course";
import Theory from "./Theory";
import Lk from "./Lk";
import EditCourse from "./EditCourse";
import TheoryEdit from "./TheoryEdit";
import ViewProblemsTheory from "./Bank_tasks/ViewProblemsTheory";

class App extends React.Component {


    render() {
        return (
            <div className="container">
                    <Router history={history}>
                        <NavigationBar/>
                        <FlashMessagesList />
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/signup" component={SignupPage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/lk/:action">
                                <Lk/>
                            </Route>
                            <Route path={'/course_edit/:id_course/bank_tasks/:id_theory'} component={ViewProblemsTheory}/>
                            <Route path={'/course_edit/:id_course/:action'} component={EditCourse}/>
                            <Redirect from="/course_edit/:id_course" to="/course_edit/:id_course/edit_module" />
                            <Route path="/task/:id_task">
                                <Task />
                            </Route>
                            <Route path="/test/:id_test">
                                <Test />
                            </Route>
                            <Route path="/course/:id_course">
                                <Course />
                            </Route>
                            <Route path="/theory/:id_theory">
                                <Theory />
                            </Route>
                            <Route path="/theory_edit/:id_theory">
                                <TheoryEdit/>
                            </Route>
                            <Route path="/new-event" component={requireAuth(NewEventPage)}/>
                        </Switch>
                    </Router>
            </div>
        );
    }
}

export default App;