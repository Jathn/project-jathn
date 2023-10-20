import React from 'react'
import "./SingleFile.css"

/* 
......
Returns a Single filed element to give a simple view with varying content possibilities.
------
Takes props as arguments, alternatives:
- Title: Title of the view
- Text: Text of the view
......
**/

const SingleFile = (props) => {
    // Title at top of element
    const title = props.title;
    // Undertitle
    const underTitle = props.underTitle;
    // Text
    const text = props.text;

    return(
        <div className="singleTop">
            <div className="selement">
                    <h1>{title}</h1>
                    <h2>{underTitle}</h2>
                    <p>{text}</p>
                </div>
        </div>
    )
}

export default SingleFile