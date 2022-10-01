import './Test65.scss';
import img from '/Users/user/Desktop/SeSac4_web/react/220930-hook-router/src/잔디.png';

const Test65 = () => {
    return(
        <div className="Larva">
            <div className = "Larva body1"/>
            <div className = "Larva body2"/> 
            <div className = "Larva body3"/> 
            <div className = "Larva body4"/> 
            <div className = "Larva body5"/> 
            <div className = "Larva eye1"/>
            <div className = "Larva eye2"/> 
            <div className = "img1">
                <img src={img}/>
            </div>
        </div>
    )
}

export default Test65;