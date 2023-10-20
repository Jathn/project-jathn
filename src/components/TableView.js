import React from 'react';
import './TableView.css';

const TableView = (props) => {
    const title = props.title;
    const content = props.content;
    let content_list_elems = [];
    for (let i = 0; i < content.length; i++) {

        let name = content[i][0];
        let description = content[i][1];
        let technologies = content[i][2];
        let link = content[i][3];

        content_list_elems.push(<li className="telement"><h3>{name}</h3><p>{description}</p><p>Technologies used: {technologies}</p><a href={link}>{link ? "Link" : "" }</a></li>);
    };
    return(
        <div className="tableTop">
            <div className="elementList">
                <h1>{title}</h1>
                <h2>Project, description & their github links:</h2>
                <ul>
                    {content_list_elems}
                </ul>
            </div>
        </div>
    );
}

export default TableView;
