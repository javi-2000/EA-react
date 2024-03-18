import Button from "../Utilities/button";

export default function HeroBanner1 ({backgroundClassName,backgroundSrc,logoSrc}) {

    return(
        <div className="HeroBanner1">
            <img className={backgroundClassName} src={backgroundSrc} alt="HeroBannerBackground not found" />
            <div>
                <img src={logoSrc} alt="Apex Legends logo not found" />
                <Button className={'ButtonBanner1'} buttonText={'Play Now'}/>
            </div>
        </div>
    )
}