import React from 'react'

const Card = (props) => {
  return (
      <div className="Card">
        <div>
        <div className="header">
            <img src={props.logo} alt="logo" />
            <button>save</button>
        </div>
        <div className="content">
            <h3>{props.company} <span>{props.time}</span></h3>
            <h2>{props.post}</h2>
            <div className="tags">
                <h4>{props.tag1}</h4>
                <h4>{props.tag2}</h4>
            </div>
        </div>
        </div>
        <div className="footer">
            <div className="tags">
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card
