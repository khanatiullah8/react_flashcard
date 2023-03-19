import React, { useEffect, useRef, useState } from 'react';
import SliderControls from './SliderControls';
import data from './data';

const Slider = () => {
  const [num, setNum] = useState(0);
  const sliderUL = useRef(null);

  // slider items mapping()
  const listItems = data.map((item) => {
    const { id, title, description } = item;
    return (
      <li className="item" key={id}>
        <div className="front">
          <span className='id'>{id}</span>
          <h3 className='title'>{title}</h3>
        </div>
        <div className="back">
          <p className='description'>{description}</p>
        </div>
      </li>
    );
  });

  // useEffect()
  useEffect(() => {
    for (let item of sliderUL.current.children) {
      item.classList.remove("active");
    }
    
    sliderUL.current.children[num].classList.add("active");
  }, [num]);

  // prevView()
  const prevView = () => {
    const items = sliderUL.current.children;
    setNum(num - 1);
    if (num <= 0) setNum(items.length - 1);
  };

  // nextView()
  const nextView = () => {
    const items = sliderUL.current.children;
    setNum(num + 1);
    if (num >= items.length - 1) setNum(0);
  };
  
  return (
    <>
      <div className="slider">
        <div className="wrapper">
          <ul className="slider-items" ref={sliderUL}>{listItems}</ul>
          <SliderControls prevView={prevView} nextView={nextView} />
        </div>
      </div>
    </>
  )
}

export default Slider;
