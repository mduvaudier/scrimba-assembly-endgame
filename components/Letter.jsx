export default function Letter(props){
    return(
        <div className="letter" style={{color: props.color}}>{props.string}</div>
    )
}