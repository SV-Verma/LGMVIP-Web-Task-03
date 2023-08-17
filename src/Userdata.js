import React from 'react'

function Userdata({ data }) {

  return (
    <div className='userdata'>
      <div className="userdata-output">
        <h3 className='userdata-heading'>ENROLLED FORM</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.imagelink && <img src={item.imagelink} alt="Uploaded" width="120px" className='img-fluid' />}  <br />
              <strong>Name:</strong> {item.name}<br />
              <strong>Email:</strong> {item.email}<br />
              <strong>Website:</strong> {item.website}<br />
              <strong>Gender:</strong> {item.gender}<br />
              <strong>Skills:</strong> {item.skills}<br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Userdata
