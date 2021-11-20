import React from 'react'

export const RightPane = (props) => {

    return (
        <ul className='right-pane-ctr list-ctr'>
            {props.items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    )
}