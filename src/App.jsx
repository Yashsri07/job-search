import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logodix.com/logo/5870.png",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Frontend React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "Design System Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "Human Interface Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "UX Researcher",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$150/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Chennai, India"
  }
];
return (
    <div className="parent">
      <h1>Find Your Next Role</h1>
      {jobOpenings.map((elem, idx) => (
        <Card
          key={idx}
          logo={elem.brandLogo}
          company={elem.companyName}
          time={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      ))}
    </div>
  )
}

export default App