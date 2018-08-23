import React from 'react';
import Utils from '../utils/utils';

const CollectionItemAvatar = ({className=[], children=[], src, icon}) => {
    className = Utils.forcedClassNameToArray(className);
    className.push("collection-item");
    className.push("avatar");
    const getAvatar = () => {
        if(src){
            return (<img src={src} alt="" className="circle" />);
        }else if(icon){
            return (<i className="material-icons circle">{icon}</i>);
        }
    }

    return (
        <li className={className.join(" ")}>
            {getAvatar()}
            {children}
        </li>
    );
}

export default CollectionItemAvatar;