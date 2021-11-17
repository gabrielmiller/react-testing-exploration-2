import React from 'react';

export default function TestButton(props) {
    return <button className={props.class} type="submit">{props.text}</button>
}