export default function Touch(props) {
  return (
    <button onClick={() => props.onClick(props.letter)} className="touch" style={{backgroundColor: props.bgColor}}>
      {props.letter}
    </button>
  );
}
