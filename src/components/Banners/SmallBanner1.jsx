import Button from "../Utilities/Button";

export default function SmallBanner1({ backgroundSrc }) {
  return (
    <div className="SmallBanner1">
      <img src={backgroundSrc} alt="Background not loaded" />
      <p>"LEARN MORE ABOUT EA SPORTS™ WRC SEASON 3"</p>
      <Button className={"ButtonSmallBanner1"} buttonText={"FIND OUT MORE"} />
    </div>
  );
}
