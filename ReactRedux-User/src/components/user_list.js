import React, {Component} from 'react';
import User from './user';
import Collection from './materializeCSS/collections/collection';
import Utils from './materializeCSS/utils/utils';
import {connect} from 'react-redux'

class UserList extends Component{

    render(){
        let className = this.props.className;
        className = Utils.forcedClassNameToArray(className);

        return (
            <Collection header={ {
                title:"Liste d'utilisateur"
            } } className={className.join(" ")}>
                {
                    this.props.users.map((user)=>{
                        return (<User className="valign-wrapper click" key={user.id}>{user.nom}</User>);
                    })
                }
            </Collection>
        );
    }
}
function mapStateToProps(state){
    return {
        users : state.users
    }
}
export default connect(mapStateToProps)(UserList);