import React, { useState } from 'react'

const AddActivity = ({ storeActivity }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const saveActivity = () => {
    storeActivity({ title, description })
  }

  return (
    <div className='AddActivity'>
      <h2>Activity title</h2>
      <input onChange={event => setTitle(event.target.value)} />
      <h2>Activity description</h2>
      <textarea
        cols='50'
        rows='10'
        onChange={event => setDescription(event.target.value)}
      />
      <button onClick={saveActivity}>Save activity</button>
    </div>
  )
}

export default AddActivity
