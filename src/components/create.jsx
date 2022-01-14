import React, { useState,useEffect,Component } from "react"
import { Form } from "react-bootstrap";
import AuthService from "../services/auth"

export default class create extends Component{
   
    constructor(props){

        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeguidename = this.onChangeGuidename.bind(this);
        this.onChangegender = this.onChangeGender.bind(this);
        this.onChangebirthyear =this.onChangeBirthyear.bind(this);
        this.onChangeprofile = this.onChangeProfile.bind(this);
        this.onChangeimage = this.onChangeImage.bind(this);
        

        this.state = {
            guidename:"",
            gender:"",
            birthyear:"",
            profile:"",
            image:"",
         sucessful:false
        };
}

onChangeGuidename(e) {
    this.setState({
      guidename: e.target.value
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeBirthyear(e) {
    this.setState({
      birthyear: e.target.value
    });
  }

  onChangeProfile(e) {
    this.setState({
      profile: e.target.value
    });
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  
}

handleRegister(e) {
  e.preventDefault();

  this.setState({

    successful: false
  });


    AuthService.createGuide(
        this.state.guidename,
        this.state.gender,
        this.state.birthyear,
        this.state.profile,
        this.state.image,
      
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
        <label htmlFor="guidename">guidename</label>
        <input
          type="text"
          className="form-control"
          name="guidename"
          value={this.state.guidename}
          onChange={this.onChangeGuidename}
          
        />
      </div>

      <div className="form-group">
        <label htmlFor="gender">gender</label>
        <input
          type="text"
          className="form-control"
          name="gender"
          value={this.state.gender}
          onChange={this.onChangeGender}
         
        />
      </div>
      

      <div className="form-group">
        <label htmlFor="birthyear">birthyear</label>
        <input
          type="text"
          className="form-control"
          name="birthyear"
          value={this.state.birthyear}
          onChange={this.onChangeBirthyear}
         
        />
       </div>

       <div className="form-group">
        <label htmlFor="profile">profile</label>
        <input
          type="text"
          className="form-control"
          name="profile"
          value={this.state.profile}
          onChange={this.onChangeProfile}
         
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="image">image</label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={this.state.image}
          onChange={this.onChangeImage}
         
        />
      </div>

      




       
      
      
      
      
      
      <div className="form-group">
        <button className="btn btn-primary btn-block">Sign Guide</button>
      </div>
    </div>
  )}

 

</Form>
</div>
</div>



    )
}



}

  



