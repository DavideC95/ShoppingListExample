import React, {Component} from 'react';

const Thumbnail = (props) => (
    <div style={{margin: 20}}>
        <img style={{width: 150, height: 150}} src={props.url} alt=""/>    
    </div>
);

export default Thumbnail;