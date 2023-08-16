import React from "react";
import Navbar from "./Navbar";
import NightImage from '../assets/2.jpg'
import Hero from "./Hero";
const Contact =()=>{
return(<>

<Navbar />
            <Hero
                cName="hero-mid"
                heroImg={NightImage}
                title="About"
                btnClass="hide"
            />
</>);
}

export default Contact;
