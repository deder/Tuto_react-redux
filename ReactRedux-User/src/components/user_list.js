import React from 'react';
import User from './user';
import CollectionLink from './materializeCSS/collection/collection-link';
import Utils from './materializeCSS/utils/utils';
import CollectionItemAvatar from './materializeCSS/collection/collection-item-avatar';
import CollectionItem from './materializeCSS/collection/collection-item';

const UserList = ({className=[], children=[]}) => {
    className = Utils.forcedClassNameToArray(className);
    return (
        <CollectionLink header={ {
            title:"Liste d'utilisateur"
        } } className={className.join(" ")}>
            <User href="http://www.google.fr">User1</User>
            <CollectionItem >User1</CollectionItem>
            <CollectionItemAvatar className="valign-wrapper active" icon="face">User2</CollectionItemAvatar>
        </CollectionLink>
    );
}

export default UserList;