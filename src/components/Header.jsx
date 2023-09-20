import React from 'react'


const Header = () => {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
};

const NavContent = () =>{
    return(
        <>
        <h2>Atul.</h2>
        <div>
            <a href="#home">HOME</a>
            <a href="#work">WORK</a>
            <a href="#contact">CONTACT</a>
        </div>
        <a href="mailto:manatul.67890@gmail.com"><button>EMAIL</button></a>
        </>
    )
}

export default Header