/* eslint-disable react/prop-types */
import './App.css'; 

function CardHead(props) {
    const {firstnote,secondnote}=props.note;
  return (
    <>
    <spam className="firstnote">{firstnote}</spam><br/>
    <spam className="secondnote">{secondnote}</spam>
    <br/>
    <spam className="nameOfCouple">{props.name}</spam><br/>

    <div className="invite">INVITE YOU TO CELEBRATE<br/><spam className="invSecondLine">THEIR WEDDING DAY</spam></div><br/>

    <div className="time">{props.time}</div>

    <div className='description'>
           <spam className="descriptionOne"> AT 3 0'CLOCK IN AFTERNOON</spam><br/>
            <spam className="descriptionTwo">123 MAIN AVENUE, NEW WORKSP</spam><br/>
            <spam className="descriptionThree"> RSVP OLIVIA & ROBERT -123456789</spam>

    </div>
    <div className='end'>
        {props.end}
    </div>

   
    </>
  )
}

export default CardHead