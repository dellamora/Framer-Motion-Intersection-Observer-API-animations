import React, { useState , useEffect } from "react";
import Section from "../../common/components/section";
import Animation from "../../common/components/animation";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Title from "../../common/components/titleAnimation";


interface ExampleTwoProps {
  children?: React.ReactNode;
}
const ExampleTwo: React.FC<ExampleTwoProps> = ({ children }): JSX.Element => {
  const [inView, setInView] = useState(false);

  return (
    <Section
      id="exampleTwo"
      setIsInView={state => {
        setInView(state);
      }}
      >
      <Title title="Now you can play with your scroll" triggerAnimation={inView}/>
      <Animation 
      inView={inView}
      >
      <motion.img
       initial={{y: 0, x: -200, rotate: "-24deg"}}
       animate={{y:0, x:-10, rotate: 0, transition: {type: "spring", stiffness: 50}}}  
        src="/leftGirl.png"
        className=" absolute top-0 left-0  h-[25rem] lg:h-[35rem]"
      />
     <motion.img
       initial={{y: 0, x: -200, rotate: "-12deg"}}
       animate={{y:0, x:-10, rotate: 0, transition: {type: "spring", stiffness: 50}}}  
       src="/leftDownGirl.png"
       className=" absolute bottom-0 left-0  h-[21rem] lg:h-[25rem]"
      />
      
      <motion.img
        initial={{y: 0, x: 200, }}
        animate={{y:0, x:15, transition: {type: "spring", stiffness: 50}}}  
        src="/rightGirl.png"
        className=" absolute top-0 -right-20  h-[25rem] lg:h-[30rem]"
    />
      <motion.img
        initial={{y: 0, x:200, rotate: "6deg" }}
        animate={{y:0, x:10, rotate: 0, transition: {type: "spring", stiffness: 50}}}       
        src="/l.png"
        className=" absolute bottom-0 -right-0  h-[22rem] lg:h-[24rem] "
    />
      </Animation>

    </Section>
  );
};

export default ExampleTwo;