import React, { useState,useEffect,Component } from "react"
import { Form } from "react-bootstrap";
import AuthService from "../services/auth"

export default class createtrip extends Component{

    constructor(props){

        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeTripname = this.onChangeTripname.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangetime =this.onChangetime.bind(this);
        this.onChangelocation = this.onChangelocation.bind(this);
        this.onChangeduration = this.onChangeduration.bind(this);
        this.onchangepackinglist = this.onchangepackinglist.bind(this);

        this.state = {
            tripname:"",
            date:"",
            time:"",
            location:"",
            duration:"",
            packinglist:"",
            sucessful:false
        };
        }

        onChangeTripname(e) {
            this.setState({
              tripname: e.target.value
            });
          }

          onChangeDate(e){
            this.setState({
                date: e.target.value
              });
           }
       
           onChangetime(e){
            this.setState({
                time: e.target.value
              });
           }

           onChangelocation(e){
            this.setState({
                location: e.target.value
              });
           }

           onChangeduration(e){
            this.setState({
                duration: e.target.value
              });
           }

           onchangepackinglist(e){
            this.setState({
                packinglist: e.target.value
              });
           }

           handleRegister(e) {
            e.preventDefault();
        
            this.setState({
        
              successful: false
            });
           
        
            AuthService.createTrips(
                this.state.tripname,
                this.state.date,
                this.state.time,
                this.state.location,
                this.state.duration,
                this.state.packinglist
              ).then(
                response => {
                  this.setState({
                 
                    successful: true
                  });
                },
                
              );
           
          }
        
          render(){
              return(
                <div className="col-md-12">
                <div className="card card-container">

                <Form
            onSubmit={this.handleRegister}
            ref={form => {
              this.form = form;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="tripname">tripname</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tripname"
                    value={this.state.tripname}
                    onChange={this.onChangeTripname}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                   
                  />
                </div>
                

                <div className="form-group">
                  <label htmlFor="time">time</label>
                  <input
                    type="text"
                    className="form-control"
                    name="time"
                    value={this.state.time}
                    onChange={this.onChangetime}
                   
                  />
                 </div>

                 <div className="form-group">
                  <label htmlFor="date">location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChangelocation}
                   
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">duration</label>
                  <input
                    type="text"
                    className="form-control"
                    name="duration"
                    value={this.state.duration}
                    onChange={this.onChangeduration}
                   
                  />
                </div>



                <div className="form-group">
                  <label htmlFor="date">packinglist</label>
                  <input
                    type="text"
                    className="form-control"
                    name="packinglist"
                    value={this.state.packinglist}
                    onChange={this.onchangepackinglist}
                   
                  />
                </div>




                 
                
                
                
                
                
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Create trip</button>
                </div>
              </div>
            )}

           
          
          </Form>
        </div>
      </div>



              )
          }
        
        
        }

          

    