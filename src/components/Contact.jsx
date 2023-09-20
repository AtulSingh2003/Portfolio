import React from 'react';
import vg from  "../assets/vg.png";
import { useState } from 'react';
import toast from "react-hot-toast";
import {addDoc,collection} from "firebase/firestore";
import {db} from "../firebase"; 

const Contact = () => {

const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [message , setMessage] = useState("");


const submitHandler = async(e) =>{
e.preventDefault();


try {
  await addDoc(collection(db,"contacts") , {
    name,email,message,
  });
  setName("")
  setEmail("")
  setMessage("")
  toast.success("Message Sent");}

 catch (error) {
  toast.error("Error");
}}


  return (
    <div id="contact">
        <section>
            <form onSubmit={submitHandler}>
                <h2>Contact Me</h2>

                <input type="text" value={name} onChange = {(e) =>setName(e.target.value)} placeholder='Your Name'/>
                <input type="email" value={email} onChange = {(e) =>setEmail(e.target.value)} placeholder='Your email'/>
                <input type="text" value={message} onChange = {(e) =>setMessage(e.target.value)} placeholder='Your Message'/>

                <button type='submit'>SEND</button>
            </form>
        </section>
            <aside><img src={vg} alt="" /></aside>
    </div>
  )
}

export default Contact