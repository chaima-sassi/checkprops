import React from 'react'
import PropTypes from 'prop-types';


 function Compo(props) {
 
     const styleObject={ color:"blue", fontFamily:"Georgia, 'Times New Roman', Times, serif",textAlign:"center",textDecoration:"underline"}
     console.log("props" , props)
  return (
    <div style={styleObject}>
    <div onClick={props.handleName(props.fullName)}>
   <h1>my name is {props.fullName}</h1>
   <h1>i'm a {props.bio} and i'm a {props.profession}</h1>
   <img src={props.children[1]} alt="image"/>



    </div>
    </div>
  )
}
Compo.propTypes ={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}
export default Compo