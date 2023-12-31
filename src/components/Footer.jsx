import React from 'react';
import {AiFillGithub,AiFillInstagram,AiOutlineArrowUp} from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Atul Singh</h2>
            <p>Motivation is temporary,but discipline last forever</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://instagram.com/_simply_atul.singh" target={"blank"}><AiFillInstagram/></a>
                <a href="https://github.com/AtulSingh2003" target={"blank"}><AiFillGithub/></a>

            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer