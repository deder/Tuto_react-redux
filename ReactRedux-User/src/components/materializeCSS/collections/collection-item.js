import React from 'react';
import Utils from '../utils/utils';

const CollectionItem = ({className=[], children=[], onClick}) => {
    className = Utils.forcedClassNameToArray(className);
    className.push("collection-item");
    return (
        <li {...{onClick}} className={className.join(" ")}>
            {children}
        </li>
    );
}

export default CollectionItem;