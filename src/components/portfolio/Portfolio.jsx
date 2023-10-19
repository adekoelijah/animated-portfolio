import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items =[
    {
        id: 1,
        title:"React Native App",
        img: "https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
    },
    {
        id: 2,
        title:"Mobile App Design with React",
        img: "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
    },
    {
        id: 3,
        title:"React Ecommerce Design",
        img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
    },
    {
        id: 4,
        title:"Next js",
        img: "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
    },
    {
        id: 5,
        title:"Next js",
        img: "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
    },
    {
        id: 6,
        title:"Next js",
        img: "https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&w=800",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
    },
    {
        id: 4,
        title:"Next js",
        img: "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
    },
    {
        id: 7,
        title:"Next js",
        img: "https://images.pexels.com/photos/1590086/pexels-photo-1590086.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Person Using Black And White Smartphone and Holding Blue Card",
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