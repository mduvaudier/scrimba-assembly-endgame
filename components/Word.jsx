import Letter from "./Letter"

export default function Word(props){
    const numberLetter = props.displayWord.length

    function init(){
        const list = []
        for(let i=0; i < numberLetter; i++){
            list.push(<Letter string={props.displayWord[i].letter} color={props.displayWord[i].color} key={i}/>)
        }
        return list
    }

    const listLetter = init()

    return(
        <div className="word">
            {listLetter}
        </div>
    )
}