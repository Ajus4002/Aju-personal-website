import React from 'react'

function Skill({contact}) {
  return (
    <div>
    <div className="member member-1">
    <div className="member-img" style={{backgroundImage:`url(${contact.image})`}}></div>
    <div className="member-info">
      <h1 className="name" >{contact.name}</h1>
      <h3 className="position">{contact.paragraph }</h3>
      <h4 className="about">{contact.details }
     </h4>
      <a href="#contact" className="contact-member">
        <span>contact</span>
      </a>
    </div>
  </div></div>
  )
}

export default Skill