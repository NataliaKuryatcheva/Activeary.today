/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// const purpleHover = 'rgba(117, 147, 243, 0.43)'
// const purple = 'rgb(117, 147, 243)'
// const green = '#5cf761'
// const pink = 'rgb(247, 92, 171)'

const Detail = ({ showActivities, currentActivity }) => {
  return (
    <div
      className='Detail'
      css={css`
        grid-area: main;
        display: ${showActivities ? 'none' : 'block'};
      `}>
      <h1
        css={css`
          padding-top: 40px;
          padding-bottom: 40px;
        `}>
        {currentActivity.title}
      </h1>
      <p>{currentActivity.description}</p>
    </div>
  )
}

export default Detail
