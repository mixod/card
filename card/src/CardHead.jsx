/* eslint-disable react/prop-types */
import './App.css';

function CardHead(props) {
    const {firstnote,secondnote}=props.note;
  return (
    <>
    <spam className="firstnote">{firstnote}</spam><br/>
    <spam className="secondnote">{secondnote}</spam>
    <br/>
    <spam className="nameOfCouple">{props.name}</spam>
    </>
  )
}

export default CardHead