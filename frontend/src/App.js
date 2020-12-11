import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './containers/About'
import Home from './containers/Home'
import Contact from './containers/Contact'
import ListingDetail from './containers/ListingDetail'
import Listings from './containers/Listings'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import Layout from './hocs/Layout'
import NotFound from './components/NotFound'

import { Provider } from 'react-redux';
import store from './store'

import './sass/main.scss';

const App = () =>(
  <Provider store = {store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/listings/:id' component={ListingDetail} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={NotFound} />
            {/* 아무것도 path를 안정했으니까 잘못 입장했을때 not found가 뜰거임 */}
        </Switch>
      </Layout>
    </Router>
  </Provider>
);


export default App;
