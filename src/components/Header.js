import { useEffect, useState } from "react"
import React from 'react'
import "./Header.css"

/* 
......
Returns a Top of the file element
------
Takes props as arguments, alternatives:
- title: Title text
......
**/

const Header = (props) => {
    var message = "";
    if (props.message) {
        message = props.message;
    }

    const [text, setText] = useState(' ');

    useEffect(() => {
        let index = 0;
        const typeText = () => {
          if (index <= message.length) {
            setText(message.substring(0, index));
            index++;
            setTimeout(typeText, 100);
          } else {
            setTimeout(() => {
              setText(' ');
              index = 0;
              typeText();
            }, 1000);
          }
        };
    
        typeText();
      }, [message]);

    return(
        <div className="TopLevel">
            <div className="phone-element">
                <h1>{props.title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Header