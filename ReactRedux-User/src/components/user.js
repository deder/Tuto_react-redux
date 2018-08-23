import React from 'react';
import CollectionItemAvatar from './materializeCSS/collections/collection-item-avatar';
import Utils from './materializeCSS/utils/utils';



const User = ({className=[], children=[]}) => {
    className = Utils.forcedClassNameToArray(className);
    return (<CollectionItemAvatar className={className.join(" ")} icon="face">{children}</CollectionItemAvatar>);
}

export default User; 