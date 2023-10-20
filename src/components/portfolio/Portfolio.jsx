import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items =[
    {
        id: 1,
        title:"React Native App",
        img: "https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android",
    },
    {
        id: 2,
        title:"Mobile App Design with React",
        img: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        desc: "React Native is a framework for building native mobile apps using JavaScript and the React. js library. React. js is the JavaScript library that powers the user interface of a React Native app, handling the rendering and updating of components.",
    },
    {
        id: 3,
        title:"React Ecommerce Design",
        img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "React can be used to build dynamic, responsive eCommerce web applications that provide a seamless user experience",
    },
    {
        id: 4,
        title:"React js",
        img: "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
        desc: "It is maintained by Meta (formerly Facebook) and a community of individual developers and companies",
    },
    {
        id: 5,
        title:"Next js",
        img: "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "React framework that enables several extra features, including server-side rendering and generating static websites",
    },
    {
        id: 6,
        title:"Twiter made with React Js",
        img: "https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&w=800",
        desc: "Twitter-Clone is a full-stack web application built with ReactJS, NodeJS, and MongoDB, aimed at replicating the core features of Twitter, such as tweeting, following, searching, and more",
    },
    {
        id: 4,
        title:"Instagram React js",
        img: "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
        desc: "t allows developers to create reusable UI components and efficiently manage the state of these components",
    },
    {
        id: 7,
        title:"Facebook Made with React",
        img: "https://images.pexels.com/photos/1590086/pexels-photo-1590086.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Facebook created React and uses it for its apps, even introducing a new version called React Fiber. Instagram: Heavily relies on ReactJS",
    },
];

const Single =({item}) =>{

    const ref = useRef()


    const {scrollYProgress} = useScroll({target:ref, /* offset: ["start start", "end start"] */});

    const y = useTransform(scrollYProgress,[0,1], [-300 ,300]);
    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="images" /> 
                    </div>
                    
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div> 
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    })
  return (
  <div className="portfolio" ref={ref}>
    <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX:scaleX}} className="progressBar">

        </motion.div>
    </div>
    {items.map((item)=>(
    <Single item ={item} key={item.id}/>
    ))}
  </div>
  );
};

export default Portfolio