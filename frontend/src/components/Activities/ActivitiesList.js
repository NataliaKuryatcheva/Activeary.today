/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const purpleHover = 'rgba(117, 147, 243, 0.43)'
const pinkHover = 'rgba(247, 92, 171, 0.80)'
// const purple = 'rgb(117, 147, 243)'
const green = '#5cf761'
// const pink = 'rgb(247, 92, 171)'

const ActivitiesList = ({
  activities,
  showActivities,
  setShowActivities,
  setCurrentActivity,
  setScreen
}) => {
  return (
    <div
      css={css`
        grid-area: sidebar-desktop;
        border-right: 1px solid black;
        height: 100%;
        text-align: left;

        @media (max-width: 800px) {
          display: ${showActivities ? 'block' : 'none'};
        }

        display: grid;
        grid-template-rows: auto 65px;
      `}>
      <ul
        className='List'
        css={css`
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
              `}
              onClick={() => {
                setCurrentActivity(activity)
                setShowActivities(false)
              }}>
              {activity.title}
            </li>
          )
        })}
      </ul>

      <div
        css={css`
          text-align: center;
          border-top: 1px ${green} solid;
          padding-top: 5px;

          &:hover {
            box-shadow: 0 0 10px ${pinkHover};
          }
        `}>
        <button
          css={css`
            font-size: 2.6rem;
            padding: 0 3rem 0 3rem;
            border: none;
            background-color: transparent;
            color: ${green};
            outline: none;
          `}
          onClick={() => {
            setScreen('addActivity')
          }}>
          <span>✚</span>
        </button>
      </div>
    </div>
  )
}

export default ActivitiesList
