import CardHead from "./CardHead"

const note={
   firstnote:"TOGETHER",
   secondnote:"WITH FAMILY"
}; 

const name= "DAVID & MARRY";



function Cardmain() {
  return (
    <CardHead  note={note} name={name}/>
  )
}

export default Cardmain