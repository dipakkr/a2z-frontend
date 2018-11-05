import React from 'react';
import './Filter.css';

const Filter = (props) => {
    return (
        <div className="filter-desktop-container">
            <select defaultValue="Filter" onChange={(e) => props.filterby(e)}>
                <option value="Filter" disabled>Filter</option>
                {props.options.map((option, i) => {
                    return (
                        <option value={option} key={i}>
                            {option}
                        </option>
                    );
                })}
            </select>

        </div>
    );
}

export default Filter;