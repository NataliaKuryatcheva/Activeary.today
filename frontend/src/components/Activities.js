import { useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const purpleHover = 'rgba(117, 147, 243, 0.43)'
// const purple = 'rgb(117, 147, 243)'
// const green = '#5cf761'
const pink = 'rgb(247, 92, 171)'

const Activities = ({ activities }) => {
  const [showActivities, setShowActivities] = useState(false)

  return (
    <div
      className='Activities'
      css={css`
        display: grid;
        grid-template-areas: 'sidebar-desktop main';
        grid-template-columns: 300px 100%;
        width: 100vw;
        height: 100vh;

        @media (max-width: 800px) {
          grid-template-columns: 80px 100%;
          grid-template-areas: "sidebar-mobile ${
            showActivities ? 'sidebar-desktop' : 'main'
          }";
        }
      `}>
      <ul
        className='List'
        css={css`
          grid-area: sidebar-desktop;
          border-right: 1px solid black;
          height: 100%;
          text-align: left;
          list-style-type: none;

          @media (max-width: 800px) {
            display: ${showActivities ? 'block' : 'none'};
          }
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

      <ul
        css={css`
          grid-area: sidebar-mobile;
          border-right: 1px solid black;
          height: 100%;
          text-align: left;
          list-style-type: none;

          @media (min-width: 800px) {
            display: none;
          }
        `}>
        <div
          id='menuToggle'
          css={css`
            display: block;
            padding: 20px 0px 0px 20px;
          `}
          onClick={() => {
            setShowActivities(!showActivities)
          }}>
          <span
            css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background-color: ${pink};
              border-radius: 3px;
              z-index: 1;
            `}
          />
          <span
            css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background-color: ${pink};
              border-radius: 3px;
              z-index: 1;
            `}
          />
          <span
            css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background-color: ${pink};
              border-radius: 3px;
              z-index: 1;
            `}
          />
        </div>
      </ul>

      <div
        className='Detail'
        css={css`
          grid-area: main;
          display: ${showActivities ? 'none' : 'block'};
        `}
      />
    </div>
  )
}

export default Activities
