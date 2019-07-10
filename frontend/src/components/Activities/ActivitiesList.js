/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const purpleHover = 'rgba(117, 147, 243, 0.43)'
// const purple = 'rgb(117, 147, 243)'
// const green = '#5cf761'
// const pink = 'rgb(247, 92, 171)'

const ActivitiesList = ({
  activities,
  showActivities,
  setShowActivities,
  setCurrentActivity
}) => {
  return (
    <div>
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

      <div>
        <button
          onClick={() => {
            alert('HEY!')
          }}
        />
      </div>
    </div>
  )
}

export default ActivitiesList
