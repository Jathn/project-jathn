import React from 'react'
import "./DoubleFile.css"

/* 
......
Returns a double filed element to give a side by side view.
------
Takes props as arguments, alternatives:

......
**/

const DoubleFile = (props) => {
    const img = props.img;
    const title = props.title;
    const text = props.text
    const text_elem = <div className="element">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
    const img_elem = <div className="element">
                            <img src={img} alt="img" />
                    </div>
    const elem1 = (props.img_pos === "left") ? img_elem : text_elem;
    const elem2 = (elem1 === img_elem) ? text_elem : img_elem;
    return(
        <div className="doubleTop">
            <div className="doublespalt">
                {elem1}
                {elem2}
            </div>
        </div>
    )
}

export default DoubleFile