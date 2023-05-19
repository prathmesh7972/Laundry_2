import React, { useState } from 'react'
import './Contactform.css'
function Contactform() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    // phone: "",
    address: "",
    message: "",

  })
  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({
      ...user, [name]: value
    })
  }
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;
    if(name&& email&& message){
      const res = await fetch("https://reactcontactform-44612-default-rtdb.firebaseio.com/reactdata.json", 
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
          name,
          email,
          message
        }),

      }

    
    );
  if(res){
    setUser({
      name: "",
      email: "",
      // phone: "",
      address: "",
      message: "",
  
    });
    alert("data stored")
  }
    }
    else{
      alert("fill the data")
    }

  //   const res = await fetch("https://reactcontactform-44612-default-rtdb.firebaseio.com/reactdata.json", 
  //   {
  //     method: "Post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message
  //       }),

  //     }

    
  //   );
  // if(res){
  //   setUser({
  //     name: "",
  //     email: "",
  //     // phone: "",
  //     address: "",
  //     message: "",
  
  //   });
  //   alert("data stored")
  // }
  
  }
  return (
    <div className ="container">
      <form id="contact" action="" method="post">
        {/* <h3>Colorlib Contact Form</h3> */}
        <h4>Contact us </h4>
        <fieldset>
          <input placeholder="Your name"
            name='name'
            value={user.name}
            onChange={getUserData}
            type="text" tabindex="1" required autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address"
            name='email'
            value={user.email}
            onChange={getUserData}
            type="email" tabindex="2" required />
        </fieldset>

        <fieldset>
          <textarea placeholder="Type your message here...."
            name='message'
            value={user.message}
            onChange={getUserData}
            tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={postData}>Submit</button>
        </fieldset>
        {/* <p className ="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p> */}
      </form>
    </div>
  )
}

export default Contactform