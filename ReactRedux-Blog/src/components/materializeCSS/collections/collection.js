import React,{Children} from 'react';
import Utils from '../utils/utils';


const Collection = ({className=[], children=[], header}) => {
    let headerDom;
    className = Utils.forcedClassNameToArray(className);
    className.push("collection");
    if(header){
        className.push("with-header");
        children = Children.toArray(children);
        children.unshift([<li className="collection-header"><h4>{header.title}</h4></li>])
    }
    return (
        <ul className={className.join(" ")} >
            {children}
        </ul>
    );
}

export default Collection;