// import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const purpleHover = 'rgba(117, 147, 243, 0.43)'
const purple = 'rgb(117, 147, 243)'
const green = '#5cf761'
const pink = 'rgb(247, 92, 171)'

const Activities = ({ activities }) => {
  return (
    <div
      className='Activities'
      css={css`
        display: grid;
        grid-template-columns: 300px auto;
        width: 100vw;
        height: 100vh;
      `}>
      <ul
        className='List'
        css={css`
          border-right: 1px solid black;
          height: 100%;
          text-align: left;
          list-style-type: none;
        `}>
        {activities.map((activity, index) => {
          return (
            <li
              key={index}
              css={css`
                padding: 20px;
                border-bottom: 1px solid black;

                &:hover {
                  cursor: pointer;
                  background-color: ${purpleHover};
                }
              `}>
              {activity.title}
            </li>
          )
        })}
      </ul>
      <div className='Detail' />
    </div>
  )
}

export default Activities
