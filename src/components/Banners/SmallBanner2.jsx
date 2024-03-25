import Button from "../Utilities/Button";

export default function SmallBanner2({ backgroundSrc }) {
  return (
    <div>
      <img src={backgroundSrc} alt="Background not loaded" />
      <p>Players and Parents: Video game control is in your hands</p>
      <Button className={"ButtonSmallBanner2"} buttonText={"Learn More"} />
    </div>
  );
}
