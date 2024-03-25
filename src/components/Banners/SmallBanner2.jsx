import Button from "../Utilities/Button";

export default function SmallBanner2({backgroundSrc,text}) {

    return(
        <div>
            <img src={backgroundSrc} alt="Background not loaded" />
            <p>{text}</p>
            <Button className={"ButtonSmallBanner2"} buttonText={"Learn More"}/>            
        </div>
    )
}