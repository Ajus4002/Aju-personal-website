import "./members.css";
import React from 'react';
import Skill from "../Skill/Skill";
 import Contact from "../Skill/details";
function members() {

  return (
    <div>
    <div id="members" className="container members-container">
    <h1 className="member-txt">Projects</h1>
    {Contact && Contact.map((contact)=>(
<Skill contact={contact}/>
    ))}
    
</div>
    </div>
  );
}

export default members;
