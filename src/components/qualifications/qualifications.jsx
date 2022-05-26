import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
    <div className="">
    
    <h1 className="title"> Skill Bar </h1>

    <div className="skillBox">

      <div className='skillBar'>
        <a className='ion-social-html5-outline'> </a>
        <span className='skillName'> HTML5 </span>
        <div className="skillArea">
          <span className="skill-HTML"> </span>
        </div>
      </div>

      <div className='skillBar'>
        <span class='skillName'> CSS3 </span>
        <div className="skillArea">
          <span className="skill-CSS"> </span>
        </div>
      </div>
      <div className='skillBar'>
        <a className='ion-social-wordpress-outline'> </a>
        <span className='skillName'> BOOTSTRAP </span>
        <div className="skillArea">
          <span className="skill-WP"> </span>
        </div>
      </div>
      <div className='skillBar'>
        <a className='ion-social-javascript'> </a>
        <span className='skillName'> JAVASCRIPT </span>
        <div className="skillArea">
          <span className="skill-JS"> </span>
        </div>
      </div>

      <div className='skillBar'>
        <a className='ion-social-angular-outline'> </a>
        <span className='skillName'> REACT_JS </span>
        <div className="skillArea">
          <span className="skill-A4"> </span>
        </div>
      </div>
      <div className='skillBar'>
        <a className='ion-social-angular-outline'> </a>
        <span className='skillName'> MONGODB </span>
        <div className="skillArea">
          <span className="skill-A4"> </span>
        </div>
      </div>
      <div className='skillBar'>
        <a className='ion-social-nodejs'> </a>
        <span className='skillName'> NODEJS </span>
        <div className="skillArea">
          <span className="skill-NODEJS"> </span>
        </div>
      </div>

     

    </div>

  </div>
    </div>
  );
};

export default Qualifications;
