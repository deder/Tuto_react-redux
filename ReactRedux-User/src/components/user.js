import React from 'react';
import CollectionItemAvatar from './materializeCSS/collections/collection-item-avatar';
import Utils from './materializeCSS/utils/utils';

const User = ({className=[], children=[], onClick}) => {
    className = Utils.forcedClassNameToArray(className);
    return (<CollectionItemAvatar {...{onClick}} className={className.join(" ")} icon="face">{children}</CollectionItemAvatar>);
}

export default User; 