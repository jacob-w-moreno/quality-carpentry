import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';

const Services = props => {
  const before='https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  const after='https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/03/How-To-Make-Fruit-Salad-680x680.jpg';
  return <div className='services'>
    HELLO THERE!!
    <BeforeAfterSlider
        before={before}
        after={after}
        width={300}
        height={480}
      />
  </div>
}

export default Services;