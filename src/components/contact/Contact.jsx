// import { useRef, useState } from "react"
import "./contact.scss"
// import { motion } from "framer-motion"
// import emailjs from '@emailjs/browser';


// const variants ={
//     initial:{
//         y:500,
//         opacity:0,
//     },
//     animate:{
//         y:0,
//         opacity:1,
//         transition:{
//             duration:0.5,
//             staggerChildren:0.1,
//         }
//     }
// }

const Contact = () => {
   /*  const formRef =useRef();
    const [error,setError] =useState(false);
    const [success,setSuccess] =useState(false);
 */


    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm(
    //         'service_hfpei1b', 
    //         'template_1azhct8', 
    //         formRef.current, 
    //         '1qwhv8pJ2fL0owUT0')

    //       .then(
    //         (result) => {
    //             setSuccess(true);
              
    //       }, 
    //       (error) => {
    //         setError(false);
    //       }
    //       );
    //   };
  return (
    <div className="contact">
        <div className="textContainer" >
            <h1>Let's Work Together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>adekoelijah@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>29,ParkRoad E/B West Lagos</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>07088294012</span>
            </div>
        </div>
        <div className="formContainer">
            <form
            /* ref={formRef}
            onSubmit={sendEmail} */
            action="https://formspree.io/f/xoqoygdw" method="POST">

                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email" />
                <textarea rows={8} placeholder="Message" name="message"/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact