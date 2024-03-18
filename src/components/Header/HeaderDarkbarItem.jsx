export default function DarkbarWrapperItem({ link, img, alt, text }) {
  return (
    <div className="darkbar-wrapper-item">
      <a href={link}>
        <img src={img} className="icon" alt={alt} />
        <p>{text}</p>
      </a>
    </div>
  );
}
