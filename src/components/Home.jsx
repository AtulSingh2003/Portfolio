import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import {BsArrowUpRight,BsChevronDown} from "react-icons/bs";
import me from "../assets/logo.png"


const Home = () => {

  const projectCount = useRef(null);

  const animationProjectCount = () =>{
    animate(0,10 , {
      duration : 1,
      onUpdate : (v) =>(projectCount.current.textContent = v.toFixed())
    });
  }

  const animations ={
    h1:{
      initial:{
        x : "-100%",
        opacity : 0,
      },

      whileInView:{
        x:0,
        opacity : 1,
      },
    },
    button:{
      initial:{
        y : "-100%",
        opacity : 0,
      },

      whileInView:{
        y:0,
        opacity : 1,
      },
    },
  };

  return (//yahan class ki jagha id isliye di h takki home p click kre toh ispe pauch jaye and home bhi anchor tag m likha na ki link tag m 
    <div id="home"> 
      <section>
        <div>
          <motion.h1 {...animations.h1}>Hi,I am <br/>Atul Singh</motion.h1>

          <Typewriter options={{
            strings:["A Developer" , "A Designer"],
            autoStart: true,
            loop:true,
            cursor:"",
            wrapperClassName:"typewriterpara"
          }}/>

        <div>
          <a href="mailto:manatul.67890@gmail.com">HIRE ME</a>
          <a href="#work">PROJECTS <BsArrowUpRight/></a>
        </div>


<aside>
  <article>
    <p>+<motion.span ref={projectCount} whileInView={animationProjectCount}></motion.span></p>
    <span>Projects Made</span>
  </article>

  <article data-special>
    <p>Contact</p>
    <span>manatul.67890@gmail.com</span>
  </article>
</aside>

        </div>
      </section>
      <section>
        <img src={me} alt="" />
      </section>
      <BsChevronDown/>
    </div>
  )
}

export default Home