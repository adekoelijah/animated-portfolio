import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
       {/*  sidebar */}
       <Sidebar/>

       <div className="wrapper">
        <motion.span initial ={{opacity:0, scale:0.5}} animate ={{opacity:1, scale:1}} transition={{duration:0.5}}>Adeks Dev</motion.span>
        <motion.div initial ={{opacity:0, scale:0.5}} animate ={{opacity:1, scale:1}} transition={{duration:0.5}} className="socials">
            <a href="#"><img src="/facebook.png" alt="facebook" /></a>
            <a href="#"><img src="/instagram.png" alt="facebook" /></a>
            <a href="#"><img src="/youtube.png" alt="facebook" /></a>
            <a href="#"><img src="/dribbble.png" alt="facebook" /></a>
        </motion.div>
       </div>
    </div>
  )
}

export default Navbar