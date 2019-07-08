/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// const purpleHover = 'rgba(117, 147, 243, 0.43)'
// const purple = 'rgb(117, 147, 243)'
// const green = '#5cf761'
const pink = 'rgb(247, 92, 171)'
const ulStyle = css`
  grid-area: sidebar-mobile;
  border-right: 1px solid black;
  height: 100%;
  text-align: left;
  list-style-type: none;

  @media (min-width: 800px) {
    display: none;
  }
`
const menuToggleStyle = css`
  display: block;
  padding: 20px 0px 0px 20px;

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background-color: ${pink};
    border-radius: 3px;
    z-index: 1;
  }
`

const SidebarMobile = ({ showActivities, setShowActivities }) => {
  return (
    <ul css={ulStyle}>
      <div
        id='menuToggle'
        css={menuToggleStyle}
        onClick={() => {
          setShowActivities(!showActivities)
        }}>
        <span />
        <span />
        <span />
      </div>
    </ul>
  )
}

export default SidebarMobile
