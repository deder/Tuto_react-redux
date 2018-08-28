import React from 'react';
import Utils from '../utils/utils';
import Collection from './collection';


const CollectionLink = ({className=[], children=[], header}) => {
    className = Utils.forcedClassNameToArray(className);
    className.push("collection");
    return (
        <Collection className={className.join(" ")} header={header}>{children}</Collection>
    );
}

export default CollectionLink;