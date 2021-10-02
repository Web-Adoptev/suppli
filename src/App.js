import React from 'react';
import { Component } from 'react';
import app from './firebase';
import { getDatabase, ref, set, onValue } from "firebase/database";
import logo from './logo.svg';
import './App.css';
import img1 from './images/blue.png';
import img2 from './images/group.png';
//import img3 from './images/white.png';
import img4 from './images/white1.png';


class App extends Component {
  
  

  
  //var A = React.createClass({
render(){
  return (
    // <div>
    //     <div>Device Test!</div>
    //     <MediaQuery query='(min-device-width: 1224px)'>
    //       <div>You are a desktop or laptop</div>
    //       <MediaQuery query='(min-device-width: 1824px)'>
    //         <div>You also have a huge screen</div>
    //       </MediaQuery>
    //       <MediaQuery query='(max-width: 1224px)'>
    //         <div>You are sized like a tablet or mobile phone though</div>
    //       </MediaQuery>
    //     </MediaQuery>
    //     <MediaQuery query='(max-device-width: 1224px)'>
    //       <div>You are a tablet or mobile phone</div>
    //     </MediaQuery>
    //     <MediaQuery query='(orientation: portrait)'>
    //       <div>You are portrait</div>
    //     </MediaQuery>
    //     <MediaQuery query='(orientation: landscape)'>
    //       <div>You are landscape</div>
    //     </MediaQuery>
    //     <MediaQuery query='(min-resolution: 2dppx)'>
    //       <div>You are retina</div>
    //     </MediaQuery>
     
    <div className="App">
      
      <div className="container">
        <a href="help@suppli.io" className="info" > For more info: help@suppli.io</a>
        <span className="sub">Subscribe to get notification as soon as we launch</span>
        <input type="text" id="emailid" className="enter" placeholder="Enter your email"></input>
        <button className="notify" onClick={notify}> NOTIFY ME </button>
        <span className="soon" > COMING SOON</span>
        <span className="certify" > Courier | On-demand | Line haul </span>
        <span className="uni"> Unified digital freight forwarders</span>
        <span className="net"> Internet of transportation</span>
        
        </div>
      <div>
      <img src={img1} alt="" className="image1"></img>
      <img src={img2} alt="" className="image2"></img>
      <img src={img4} alt="" className="image4"></img>
      
      </div>
    </div>
    //</div>
  );
}
}
function notify()
{
    const email = document.getElementById("emailid").value;
    const db = getDatabase();
    const dbref = ref(db,'users');
    onValue(dbref,(snapshot) => {
      var count = snapshot.size;
      count++;
      set(ref(db, 'users/' + count), {
        'email' : email
      });

  }, {
    onlyOnce:true});
    window.alert("your mail has been registered")
  
}

export default App;
