import React from 'react'
import { ArrowLeft, ArrowRight } from '../assets/CustomLogo'

const SliderControls = ({prevView, nextView}) => {
  return (
    <>
      <ul className="slider-controls">
        <li className="arrow-left control-icon" onClick={()=> prevView()}>
          <ArrowLeft />
        </li>
        <li className="arrow-right control-icon" onClick={()=> nextView()}>
          <ArrowRight />
        </li>
      </ul>
    </>
  )
}

export default SliderControls