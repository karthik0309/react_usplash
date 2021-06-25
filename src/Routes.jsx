import React,{lazy,Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinnner from './components/utilities/Spinnner';

const App=lazy(()=>import("./App"))
const Search=lazy(()=>import("./pages/Search"))
const AboutUs=lazy(()=>import("./pages/AboutUs"))

const Routes = () => {
    return (
    <Suspense fallback={<Spinnner/>}>
      <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Search" component={Search} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
    </Router>
    </Suspense>
    )
}

export default Routes
