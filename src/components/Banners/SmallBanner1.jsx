import Button from "../Utilities/Button";

export default function SmallBanner({backgroundSrc,text}){


    return(
        <div>
            <img src={backgroundSrc} alt="Background not loaded" />
            <p>{text}</p>
            <Button className={} buttonText={}/>
        </div>
    )
}