import React from 'react';

export const Pane = (props) => {

    return (

        <ul className={props.class + ' list-ctr'}>
            {props.items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    )
}