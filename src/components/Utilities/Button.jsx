//This components admits two props, one for the classname of the 
//parent container, another for the text inside it.
export default function Button({ className, buttonText }) {
  return (
    <a className={className}>
      <span>{buttonText}</span>
    </a>
  );
}
