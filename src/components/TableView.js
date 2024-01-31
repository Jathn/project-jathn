import React from 'react';
import './TableView.css';

const TableView = (props) => {
    const title = props.title;
    const underTitle = props.underTitle;
    const content = props.content;
    const secondTitle = props.secondTitle;

    let content_list_elems = [];
    for (let i = 0; i < content.length; i++) {

        let name = content[i][0];
        let img = content[i][1];
        let description = content[i][2];
        let technologies = content[i][3];
        let link = content[i][4];

        content_list_elems.push(<li className="telement"><h3>{name}</h3>{img ? <img src={img} alt={"img"}></img> : ""}<p>{description}</p><p>{secondTitle}</p><p>{technologies}</p><a href={link}>{link ? "Link" : "" }</a></li>);
    };
    return(
        <div className="tableTop">
            <div className="elementList">
                <h1>{title}</h1>
                <h2>{underTitle}</h2>
                <ul>
                    {content_list_elems}
                </ul>
            </div>
        </div>
    );
}

export default TableView;
