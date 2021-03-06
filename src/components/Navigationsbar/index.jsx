import React, { useState,useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,   
    Routes,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation,
    NavLink
  } from "react-router-dom";
import Trips from "../../triplist";
import Createtrip from "../Createtrips";
import Create from "../create";

  function Header(){


    return(


<Router>  
<header className='header'>
 


<Navbar className='container nav left-align'>

<li><NavLink  to='/'>Casmag</NavLink></li>
<li><NavLink  to='/Trips'>Trips</NavLink></li>
<li><NavLink to='/Guides' >Guides</NavLink></li>
<li><NavLink to='/Createtrips'>Create Trips</NavLink></li>
<li><NavLink to='/Createguides'>Create Guide</NavLink></li>


<div class=""></div>
<div class="login-container-right">

</div>

</Navbar>

</header>

<Routes>
      <Route exact path="/">
       
      </Route>
    <Route path="/Trips" element ={<Trips/>}/>
      <Route path="/Guides"/>
      <Route path="/Createtrips" element = {<Createtrip/>}/>
      <Route path="/Createguides" element = {<Create/>}/>
    </Routes>

</Router>  





    )








}

export default Header