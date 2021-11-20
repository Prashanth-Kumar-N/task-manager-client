import React, {createRef, useEffect, useState} from 'react';
import { Pane } from './components-interview/pane';
import './interview.css';

export const InterviewContainer = () => {
    const [type, setType] = useState('password');
    const [toggleText, setToggleText] = useState('Show');
    const leftPaneItems = ['a', 'b', 'c', 'd', 'e', 'f'];
    const rightPaneItems = [1, 2, 3, 4, 5];
    const h1Ref = createRef();

    const togglePassword = e => {
        e.preventDefault();
        const newType = type === 'password' ? 'text' : 'password';
        const newToggleText = type === 'password' ? 'Hide' : 'Show';
        setType(newType);
        setToggleText(newToggleText);
    }


    useEffect(() => {
        h1Ref.current.focus();
    }, []);

    return (
        <>
        <h1 ref={h1Ref} className='heading' tabIndex='-1'> Two Column Layout</h1>
        <input type={type}></input>
        <a href='#' onClick={e => togglePassword(e)}> {toggleText} </a>
        <section className='container-section'>
            <Pane items={leftPaneItems} class='left-pane-ctr'></Pane>
            <Pane items={rightPaneItems} class ='right-pane-ctr'></Pane>
        </section>
        </>
    )
}