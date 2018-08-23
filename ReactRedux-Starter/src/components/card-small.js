import React  from 'react';
import { ReactDom } from 'react-dom';

const CardSmall = ({ title, image, onClick}) => {

    const heigth = 300;

    const cardCss = {
        marginTop: 0,
        marginBottom: 0,
        paddingTop: '10px',
        paddingBottom: '10px',
        height: 'auto'
    }
    const cardImageCss = {
        maxHeight: heigth + "px"
    }
    const cardContentCss = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '24px',
        overflow: 'inherit',
        maxHeight: 'none',
        height: '90px',
    }
    const overActivator = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(-180deg, #004D40, rgba(255, 255, 255, 0))',
        opacity: 0.4
    }

    const cardTitle = {
        width: '100%',
        padding: '0',
        paddingBottom: '5px',
        paddingLeft: '24px',
        paddingRight: '24px',
        verticalAlign: 'middle',
        display: "inline-block",
        lineHeight: 1.2,
        textAlign: 'left',
        zIndex: 2,
        fontWeight: 500,
        fontFamily: "Roboto",
        opacity: 0.90,
        color: 'white !important'
    };
    const cardContentBackground =
    {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#004D40',
        opacity: 0.60,
        zIndex: 1
    }

    return (<div className={`card col l3 s12 m12`} style={cardCss}  onClick={onClick}>
        <div className="card-image waves-effect waves-block waves-light" style={cardImageCss}>
            <div className="card-content" style={cardContentCss}>
                <span className="card-title activator grey-text text-darken-4" style={cardTitle}>
                    {title}
                </span>
                <div className="card-content-background" style={cardContentBackground}></div>
            </div>
            <div style={overActivator}></div>
            <img className="activator" src={image} />
        </div>
    </div>)
}


export default CardSmall;