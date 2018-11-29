import React from 'react';
import './StudentBenefits.css';

const StudentBenefits = (props) => {
    return (
        <div className="student-benefits-card">
            <h3>{props.title}</h3>
            <hr />
            <ul>
                {props.links.map((link, i) => {
                    return (
                        <li key={i}>
                            <a href={link["url"]}>{link["title"]}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default StudentBenefits;