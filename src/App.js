import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import axios from 'axios';
// import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation' ;
import Logo from './components/logo/logo' ;
import  ImageLinkform from './components/ImageLinkform/ImageLinkform' ;
import  FaceRecognition from './components/FaceRecognition/FaceRecognition' ;
import  Rank from './components/rank/rank' ;
import './App.css';


// const Clarifai = require('clarifai');
// const app = new Clarifai.App({
//  apiKey: '3ab5602e0d0042fa86a35bdfaebe0f29'
// });



class App extends Component{
  constructor(){
    super();
    this.state ={
      input:'',
      imageUrl:'',
  }
}
 onInputChange = (event) =>{
  this.setState({input:event.target.value});
}

onButtonChange =async () =>{
this.setState({imageUrl:this.state.input});

// app.models.
// predict('face-detection',
//  'https://s3.amazonaws.com/samples.clarifai.com/featured-models/face-three-men-sitting-in-van.jpg')
//       .then(
//         function (response) {
//         console.log( response)
// },
//       function(err) {

//       }
//       )  

axios.get('https://api.sightengine.com/1.0/check.json', {
  params: {
   
    'models': 'Face-Detect',
    'api_user': '802737240',
    'api_secret': 'yiso2QY45tKuEBZkGoQeRK3fch',
   
  }
  
})
.then(function (response) {
  // on success: handle response
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  if (error.response) console.log(error.response.data);
  else console.log(error.message);
});



}
render(){
  return (
    <div className='App'>
       <ParticlesBg type='fountain' bg={true} />
     <Navigation />
     <Logo />
     <Rank/>
     <ImageLinkform 
     onInputChange={this.onInputChange}
      onButtonChange={this.onButtonChange}
     />
     <FaceRecognition imageUrl={this.imageUrl}/>
    </div>
  );
}
}


export default App;
