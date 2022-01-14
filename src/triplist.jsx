import { Button,Card,CloseButton } from 'react-bootstrap';
import axios from "axios";
import React, { useState,useEffect,Component } from "react"
import facade from './components/login/loginFacade';
import SERVER_URL from './settings';

const API_URL = "http://localhost:8080/CA2_war_exploded/api";

function DeleteArticle(params) {
   
    const options = facade.makeOptions("GET",true);
    return fetch(SERVER_URL +'/api/trip/delete?id='+params,)
    
    .then((res) =>{
    //setTimeout(()=>{window.location.reload(false)},500)
    })
   
      
  }


export default class Trips extends Component{


    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:8080/CA2_war_exploded/api/trip/alltrips")
            .then((res) => res.json())
           
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Trips </h1>  {
               this.state.items.map((item) => ( 
               
               

                <Card style={{ width: '18rem' }}>
  <button className="btn btn-danger btn-xs" style = {{ width: '1rem' }} onClick= {()=> {DeleteArticle(item.tripId)}} /> 
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{item.tripName}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{item.date}{" "}{item.time}{" "}{item.duration}{item.location}</Card.Subtitle>
    <Card.Text>
     {item.packingList}
    </Card.Text>
 
  </Card.Body>
</Card>

              
                ))
            }
        </div>
    );
}
}

      
          
      


