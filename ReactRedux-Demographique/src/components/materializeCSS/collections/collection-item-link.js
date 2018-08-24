import React from 'react';
import Utils from '../utils/utils';

const CollectionItemLink = ({className=[], children=[], href=""}) => {
    className = Utils.forcedClassNameToArray(className);
    className.push("collection-item");
    return (
        <a href={href} className={className.join(" ")}>
            {children}
        </a>
    );
}

export default CollectionItemLink;