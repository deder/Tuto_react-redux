import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { selectUser } from './../actions/index';
import Collection from '../components/materializeCSS/collections/collection';
import User from '../components/user';
import Utils from '../components/materializeCSS/utils/utils';

class UserList extends Component{
    clickUserHandler = user => event => {
        this.props.selectUser(user);
    }
    render(){
        let className = this.props.className;
        className = Utils.forcedClassNameToArray(className);

        return (
            <Collection header={ {
                title:"Liste d'utilisateur"
            } } className={className.join(" ")}>
                {
                    this.props.users.map((user)=>{
                        return (<User onClick={this.clickUserHandler(user)} className="valign-wrapper click" key={user.id}>{user.nom}</User>);
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
function mapDispactchToProps(dispatch){
    return bindActionCreators({selectUser}, dispatch)
}
export default connect(mapStateToProps, mapDispactchToProps)(UserList);