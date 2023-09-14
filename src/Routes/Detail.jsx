import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const params = useParams()
  const [dentist, setDentist] = useState()

  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => {
      setDentist(res.data)
    })
    },[params.id]);

  return (
    <section className='card-container'>
      <h2>Dentist Details N°{params.id}</h2>
      {dentist &&
          <div>
            <img src="../images/doctor.jpg" width={200} alt="" />
            <div>
              <h3>{dentist.name}</h3>
              <p><strong>Email:</strong> {dentist.email}</p>
              <p><strong>Phone:</strong> {dentist.phone}</p>
              <p><strong>Username:</strong> {dentist.username}</p>
              <p><strong>Website:</strong> https://{dentist.website}</p>
            </div>
          </div>
      }
    </section>
  )
}

export default Detail