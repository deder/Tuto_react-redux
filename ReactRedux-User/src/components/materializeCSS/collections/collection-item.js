import React from 'react';
import Utils from '../utils/utils';

const CollectionItem = ({className=[], children=[]}) => {
    className = Utils.forcedClassNameToArray(className);
    className.push("collection-item");
    return (
        <li className={className.join(" ")}>
            {children}
        </li>
    );
}

export default CollectionItem;