import React from "react";
import {Link} from "react-router-dom"; 
import {motion, spring} from "motion/react";
import {Button} from "@mantine/core"
const Navbar =()=>{
    return(
<nav className="h-16 p-2" >
    <div className="flex mx-6 items-center justify-between mx-auto">
        <motion.h1 initial ={{opacity:0 , y:-10}} animate={{opacity:1 , y:0}} transition={{duration: .5}} className="text-2xl font-semibold">
            NEWSAI
        </motion.h1>
        <ul className="flex gap-4">
           { ['Home' , 'Categories', 'Channels', 'About'].map((item)=>(
<motion.li whileHover={{scale:1.1}}
transition={{type: "spring", stiffness :100}}
key={item}
className="hover:text-gray-700">
    
    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
    </motion.li>
           ))
           }
        </ul>
        <div>
            <Button variant="white">Login</Button>
            <Button>Register</Button>
        </div>
    </div>
</nav>
    )
}
export default Navbar;