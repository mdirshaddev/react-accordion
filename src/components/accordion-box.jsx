import React from 'react'

import { faUser,faMailBulk,faCog,faDoorOpen } from "@fortawesome/free-solid-svg-icons";


import AccordionList from './accordion-list';

export default function AccordionBox(props) {
  return (
    <div className="middle">
      <div className="accordion-box">
        <AccordionList icon={faUser} />
        <AccordionList icon={faMailBulk} />
        <AccordionList icon={faCog} />
        <AccordionList icon={faDoorOpen} />
      </div>
    </div>
  )
}
