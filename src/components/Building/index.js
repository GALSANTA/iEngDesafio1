import React from 'react';
import './style.css';

export default function Building(props) {

    return (
        <div className="col s6 m6 l6">
            <div className="predio">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div> 
    )
}


