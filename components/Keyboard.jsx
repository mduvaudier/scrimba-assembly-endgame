import Touch from "./Touch"

export default function Keyboard(props){

    const listTouch = props.alphabet.map((item)=> <Touch onClick={props.onClick} letter={item.text} bgColor={item.bgcolor} key={item.text}/>)
    return(
        <div className="keyboard">
            {listTouch}
        </div>
    )
}