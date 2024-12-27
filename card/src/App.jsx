import CardHead from "./CardHead"

const note={
   firstnote:"TOGETHER",
   secondnote:"WITH FAMILY"
}; 

const name= "DAVID & MARRY";

const times= "7 NOVEMBER,2025";

const end="--THANK YOU--";
  
  


function Cardmain() {
  return (
    <CardHead  note={note} name={name} time={times} end={end}/>
  )
}

export default Cardmain