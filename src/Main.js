import React, { Component } from 'react'
import{Card,Button} from 'react-bootstrap'





export default class Main extends Component {
    constructor(){
        super();
     this.state={
    person:{
      fullname:" abdou ",
      bio:"A web developer",
      imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCB4wTMpfhXcbcmrgcpsEoOjmnDykXo30Jw&usqp=CAU",
      profession:"software Engineer"
    },
       shows:true,
       mountTime:0,
  
    };
    }
  
   toggelprofile = ()=>{
   this.setState({shows : !this.state.shows})
   }
  
  
  
   componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountTime: this.state.mountTime + 1 });
    }, 1000);
    
  }
  
    componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  



  render() {
    const{fullname,bio,imgsrc,profession}=this.state.person;
    const{shows}=this.state;
    return (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"10%"}}>
                {shows && (
              <div>
    
                <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={imgsrc} alt={fullname} />
                 <Card.Body>
                   <Card.Title>{fullname}</Card.Title>        
                      <p>{bio}</p>
                      <p>{profession}</p>
                      <p>Mounted for: {this.state.mountTime} seconds</p>
            
                    </Card.Body>
                  </Card>
            </div>
                )}
                 <Button variant="primary" onClick={this.toggelprofile} >toggel profile</Button>
        </div>
           )}
      
  
  }


