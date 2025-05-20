export default function Message(props) {
  function looseLang() {
    console.log(props.result)
    const result = props.listLangs.filter((item) => item.dead).map((item) => item.name)

    return "Farewell " + result.join(" & ") + "🫡 ";
  }
  const resultMessage = looseLang()

  if (props.result === "win") {
    return (
      <div className="message" style={{backgroundColor: "rgba(16, 169, 91, 1)"}}>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </div>
    );
  } else if (props.result === "loose") {   
    return (
      <div className="message" style={{backgroundColor: "rgba(186, 42, 42, 1)"}}>
        <h2>Game over</h2>
        <p>You lose! Better start learning Assembly 😭</p>
      </div>
    );
  } else if (props.result === "start"){
    return (
      <div className="message">
      </div>
    );
  }
  else {
    
    return (
      <div className="message"  style={{backgroundColor: "rgba(122, 94, 167, 1)"}}>
        <p>{resultMessage}</p>
      </div>
    );
  }
}
