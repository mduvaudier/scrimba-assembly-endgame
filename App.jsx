import { useState } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Languages from "./components/Languages";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Button from "./components/Button";
import { stAlphabet } from "./assets/alphabet";
import { stListLang } from "./assets/listLang";
import { words } from "./assets/word";
import ReactConfetti from "react-confetti";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
    

  const [answer, setAnswer] = useState(words[Math.floor(Math.random() * words.length)]);
  const [displayAnswer, setDisplayAnswer] = useState(initDisplayAnswer);
  const [alphabet, setAlphabet] = useState(stAlphabet);
  const [counter, setCounter] = useState(0);
  const [listLangs, setListLang] = useState(stListLang);
  const [result, setResult] = useState("start");

  function newGame(){
    setAnswer(words[Math.floor(Math.random() * words.length)])
    setDisplayAnswer(initDisplayAnswer)
    setAlphabet(stAlphabet)
    setCounter(0)
    setListLang(stListLang)
    setResult("start")
  }

  function initDisplayAnswer() {
    const word = [];
    for (let i = 0; i < answer.length; i++) {
      word.push({letter: "", color: ""});
    }
    return word;
  }

  function onClick(touch) {
    if (answer.indexOf(touch) === -1) {
      setAlphabet((prev) =>
        prev.map((item) =>
          item.text === touch
            ? { ...item, bgcolor: "rgba(236, 93, 73, 1)" }
            : item
        )
      );
      if (counter < 8) {
        console.log(counter);
        console.log(listLangs.length);
        setListLang((prev) =>
          prev.map((item, id) =>
            id === counter ? { ...item, dead: true } : item
          )
        );
        setCounter(counter + 1);
        setResult("oups");
      } else {
        setDisplayAnswer((prev)=> 
          prev.map((item, id)=>
            item.letter === answer[id] ? item : {letter: answer[id], color: "rgba(236, 93, 73, 1)"}
           )
        )
        setResult("loose");
      }
    } else {
      setAlphabet((prev) =>
        prev.map((item) =>
          item.text === touch
            ? { ...item, bgcolor: "rgba(16, 169, 91, 1)" }
            : item
        )
      );
      setDisplayAnswer((prev) => {
        const newAnswer = prev.map((item, id) =>
          answer[id] === touch ? {...item, letter: touch } : item
        );
        const newAnswerFlat = newAnswer.map((item)=>item.letter)
        if (newAnswerFlat.join("") == answer) {
          setResult("win");
        }
        return newAnswer;
      });
    }
  }

  return (
    <main>
      {result === "win" ?<ReactConfetti /> : null}
      <Header />
      <Message listLangs={listLangs} result={result} />
      <Languages listLangs={listLangs} />
      <Word displayWord={displayAnswer} />
      <Keyboard alphabet={alphabet} onClick={onClick} />
      {result === "win" || result ==="loose" ? <Button onClick={newGame}/> : ""}
    </main>
  );
}
