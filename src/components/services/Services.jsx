import { useRef } from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView =useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial ="initial" /* animate ="animate" */ /* whileInView="animate" */ ref={ref} animate={/* isInView && */ "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow <br />and moving it forward through a professional design</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="people" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Web Development</h2>
                <p>I create and maintain websites. I'm also responsible for the site's technical aspects, 
                    such as its performance and capacity, which are measures of a website's 
                    speed and how much traffic the site can handle. In addition,
                     as a web developers I can create content for your site.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>UI/UX DESIGNER</h2>
                <p>
                UX designers don&apost just work for tech businesses. 
                UX designers are integral in helping businesses of all 
                kinds create products and services that are tailored to their users&apos s needs, 
                making them an essential part of the process when 
                it comes to creating successful products and services.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>WEB DESIGN</h2>
                <p>A web designer is responsible for creating the design and layout of
                     a website or web pages. Unlike web developers, 
                     who specialise in creating new websites' structures and the
                      code that forms these, web designers 
                    tend to focus on the visual aspects of a site, 
                    such as its layout and its usability</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Email Marketing</h2>
                <p>I create and maintain websites. I'm also responsible for the site's technical aspects, 
                    such as its performance and capacity, which are measures of a website's 
                    speed and how much traffic the site can handle. In addition,
                     as a web developers I can create content for your site.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services