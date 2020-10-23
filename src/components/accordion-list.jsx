import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AccordionList(props){
  const [toggle, setToggle] = useState(true);
  function Toggle(){
    return(
      setToggle(!toggle)
    )
  }
  return(
    <li className="item">
    <button className="btn" onClick={Toggle}><FontAwesomeIcon icon={props.icon} />Profile</button>
      <div className={toggle ? "menu": "menu open"}>
        <button href="/">Posts</button>
        <button href="/">Messages</button>
      </div>
    </li>
  )
}