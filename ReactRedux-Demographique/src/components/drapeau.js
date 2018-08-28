import React from 'react';
const URL_BASE = 'http://www.sciencekids.co.nz/images/pictures/flags680/'
const Drapeau = ({country, className})=>{
    return (<img width={"100%"} {...{className}} src={`${URL_BASE}${country}.jpg`} />)
}
export default Drapeau;