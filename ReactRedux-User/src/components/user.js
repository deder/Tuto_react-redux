import React from 'react';
import CollectionItemLink from './materializeCSS/collections/collection-item-link';
import Utils from './materializeCSS/utils/utils';



const User = ({className=[], children=[]}) => {
    className = Utils.forcedClassNameToArray(className);
    return (<CollectionItemLink className={className.join(" ")} >{children}</CollectionItemLink>);
}

export default User; 