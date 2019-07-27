import React, { useState } from 'react'
import MapPicker from './AddActivity/MapPicker'

const AddActivity = ({ storeActivity, setScreen }) => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState({}) // longitude, latitude
  const [description, setDescription] = useState('')

  const addActivity = () => {
    storeActivity({ title, location, description })
    setScreen('activities')
  }

  return (
    <div className='AddActivity'>
      <h2>Activity title</h2>
      <input onChange={event => setTitle(event.target.value)} />

      <MapPicker location={location} setLocation={setLocation} />

      <h2>Activity description</h2>
      <textarea
        cols='50'
        rows='10'
        onChange={event => setDescription(event.target.value)}
      />
      <button onClick={addActivity}>Save activity</button>
    </div>
  )
}

export default AddActivity
