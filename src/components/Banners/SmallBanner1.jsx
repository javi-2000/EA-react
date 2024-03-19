import Button from "../Utilities/Button";

export default function SmallBanner1({backgroundSrc,text}){


    return(
        <div>
            <img src={backgroundSrc} alt="Background not loaded" />
            <p>{text}</p>
            <Button className={"ButtonSmallBanner1"} buttonText={"FIND OUT MORE"}/>
        </div>
    )
}