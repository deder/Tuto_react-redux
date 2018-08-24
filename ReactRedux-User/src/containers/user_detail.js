import React,{Component} from 'react';
import { connect } from 'react-redux';
import Utils from '../components/materializeCSS/utils/utils';
import Collection from './../components/materializeCSS/collections/collection';
import CollectionItem from './../components/materializeCSS/collections/collection-item';
class UserDetail extends Component{
    render(){
        let {activeUser, className} = this.props;
        className = Utils.forcedClassNameToArray(className);
        className.push("card");
        if(!activeUser){
            return <div className={className.join(" ")} >
                <div className="card-content">
                    <span className="card-title">Aucun utilisateur</span>
                    <p>Veuillez cliquer sur un utilisateur</p>
                </div>
            </div>
        }
        return  (
            <div className={className.join(" ")}>
                <div className="card-content">
                    <span className="card-title">{activeUser.nom}</span>
                    <Collection>
                        <CollectionItem>id Utilisateur : {activeUser.id}</CollectionItem>
                        <CollectionItem>Compte actif : {activeUser.active?"Oui":"Non"}</CollectionItem>
                        <CollectionItem>Type de compte : {activeUser.role}</CollectionItem>
                    </Collection>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state){
    return {
        activeUser: state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail);