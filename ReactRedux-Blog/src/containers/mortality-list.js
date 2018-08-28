import React, { Component } from 'react';
import MortalityListItem from '../components/mortality-list-item';
import { getMortality } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isRegExp } from 'util';
class MortalityList extends Component {
    constructor(props){
        super(props);
        this.state ={
            defaultCountry:props.defaultCountry
        }
    }
    componentWillMount(){
        this.props.getMortality(this.state.defaultCountry);
    }
    renderMortalities = () => {
        const {mortalities} = this.props;
        if(mortalities && mortalities.length > 0){
            return mortalities.map((mortality) =>{
                return <MortalityListItem key={mortality.country} {...{mortality}} />
            });
        }
    }
    render() {
        console.log(this.props.mortalities)
        return (<div>

            <table>
                <thead>
                    <tr  className="row">
                        <th className="col m2">Pays</th>
                        <th  className="col m5">Homme</th>
                        <th  className="col m5">Femme</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderMortalities()}
                </tbody>
            </table>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        mortalities: state.mortalities
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getMortality}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MortalityList);