import Lang from "./Lang";

export default function Languages(props) {
  
  const listes = props.listLangs.map((item, id) => (
    <Lang text={item.name} key={id} bgcolor={item.bgcolor} color={item.color} dead={item.dead}/>
  ));

  return <div className="languages">{listes}</div>;
}
