import React from 'react';
import Utils from '../utils/utils';
import CollectionItem from './collection-item';

const CollectionItemAvatar = ({className=[], children=[], onClick, src, icon}) => {
    className = Utils.forcedClassNameToArray(className);
    className.push("avatar");
    const getAvatar = () => {
        if(src){
            return (<img src={src} alt="" className="circle" />);
        }else if(icon){
            return (<i className="material-icons circle">{icon}</i>);
        }
    }

    return (
        <CollectionItem {...{onClick}} className={className.join(" ")}>
            {getAvatar()}
            {children}
        </CollectionItem>
    );
}

export default CollectionItemAvatar;