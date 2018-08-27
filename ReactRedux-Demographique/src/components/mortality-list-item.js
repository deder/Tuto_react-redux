import React from 'react';
import Drapeau from './drapeau';
import {ColumnChart} from 'react-chartkick';
import Chart from 'chart.js';
const xtitle = "Age";
const ytitle = "% Mortalité";
window.Chart = Chart;

const formatMortalityData = (mortality) =>{
    mortality = mortality.filter(data =>{
        if(data.age > 100){
            return false
        }
        return data;
    });
    mortality =  mortality.map((data)=>{
        return [Number(data.age).toFixed(), Number(data.mortality_percent).toFixed()]
    });
    console.log(mortality)
    return mortality;
}

const MortalityListItem = ({mortality})=>{
    return (<tr className="row">
        <td className="col m2"><Drapeau country={mortality.country} className="flag_medium" /> </td>
        <td className="col m5">         
            <ColumnChart {...{xtitle}} {...{ytitle}}  data={formatMortalityData(mortality.male)} max={30} />
        </td>
        <td className="col m5">        
            <ColumnChart {...{xtitle}} {...{ytitle}}  data={formatMortalityData(mortality.female)} max={30} />
        </td>
    </tr>)
}
export default MortalityListItem;