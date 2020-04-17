
import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import Geocode from "react-geocode";

const AddListing = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const [price, setPrice] = useState("");
  const [capacity, setCapactiy] = useState("");

  const [delivery, setDelivery] = useState("pickup");
  
  const handleSetImg = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImg(e.target.result);
    }
  }
  
  const handleTypeBtn=(e, value)=>{
    e.preventDefault();
    setDelivery(value);
  }
  const handleClickClose = (e) => {
    e.preventDefault();
    document.getElementById("overlay-add-listing").style.display = "none";
}

const handleSubmitBtn=(e) => {
    e.preventDefault();
    let longRes = 0;
    let latRes = 0;
    Geocode.setRegion("ca");
    // Get latidude & longitude from address.
    Geocode.fromAddress(address).then(
      response => {
        const { lat, long } = response.results[0].geometry.location;

        latRes = lat;
        longRes = long;

        console.log(lat, long);
      },
      error => {
        console.error(error);
      }
    );

    let sendData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 
          "userHandle": "123",	
          "title": title.toString(),
          "description": description.toString(),
          "address": address.toString(),
          "country": country.toString(),
          "price": price.toString(),
          "capacity": capacity.toString(),
          "phone": phone.toString(),
          "email": email.toString(),
          "img": img,
          "lat": latRes,
          "long": longRes,
          "city": city.toString()
          
      })
    };

    fetch('https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts', sendData)
    .then(res => {
      return res.json().then((data) =>{
        console.log("DATA",data);
        if (res.status === 201){
          alert("post created");
          document.getElementById("overlay-add-listing").style.display = "none";
        } else {
          alert("error creating post");
        }
      })
    });
  }
    return (
      <div id="overlay-add-listing">
        
        <div className="add-listings-popup">
          <h1 className="new-post-h1">Add Listing</h1>
          <p className="popup-grey-text">INFORMATION</p>
          <form>
            <div className="row">
             <div className="col-6-md">
          <input placeholder="Title"  onChange={e => setTitle(e.target.value)} className="add-listings-input"/>
          <textarea rows="4" 
          onChange={e => setDescription(e.target.value)} 
          className="add-listings-description" placeholder="description"></textarea>
          <input placeholder="Address" 
          onChange={e => setAddress(e.target.value)} 
          className="add-listings-input"/>
          <input placeholder="city" 
          onChange={e => setCity(e.target.value)} 
          className="add-listings-input"/>
              <input placeholder="Country" 
              onChange={e => setCountry(e.target.value)} 
              className="add-listings-input"/>
          <input placeholder="Phone Number" 
              onChange={e => setPhone(e.target.value)} 
              className="add-listings-input"/>
          
          <input placeholder="Email" 
              onChange={e => setEmail(e.target.value)} 
              className="add-listings-input"/>
          
              </div>
              <div className="col-6-md right-col-add-listing">
              <input placeholder="Price per unit" 
              onChange={e => setPrice(e.target.value)} 
              className="add-listings-input"/>
          <input 
          onChange={e => setCapactiy(e.target.value)} 
          placeholder="Weekly production capacity" className="add-listings-input"/>
                <div className="row">
              <button className={(delivery==="pickup")?"listing-type-chosen":"listing-type"} onClick={(e)=>{handleTypeBtn(e, "pickup")}}>Pick Up</button> 
          <button className={(delivery==="delivery")?"listing-type-chosen":"listing-type"} onClick={(e)=>{handleTypeBtn(e, "delivery")}}>Delivery</button>
          </div>
          Upload image
          <label className="upload-file-btn">
   <input type="file" className="img-upload" accept="image/jpeg, image/png" onChange={(e) => {handleSetImg(e.target.files[0])}}/></label>
   <button className="submit-post-btn" onClick={(e)=>handleSubmitBtn(e)}>Submit</button>
   <button className="submit-post-btn" onClick={(e)=>handleClickClose(e)}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
        </div>
           )
  }


  export default AddListing;