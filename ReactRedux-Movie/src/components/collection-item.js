import React from 'react';

const CollectionItem = (props) => {
    const getImage = () => {
        if(props.image){
            return <img src={props.image} alt={props.title} className="circle" />
        }
    }
    return (<li className="collection-item avatar" onClick={props.onClick}>
            {getImage()}
            <span className="title">{props.title}</span>
            <p>{props.description}</p>
        </li>);
}

export default CollectionItem;
