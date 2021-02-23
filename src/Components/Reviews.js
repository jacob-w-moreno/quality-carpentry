import React, {useEffect, useState} from 'react';

const Reviews = props => {
  const [index, setIndex] = useState(1);
  const reviews = [
    {
      name: 'Jake Moreno',
      review: 'Rob and his team were a delight to work with. 10/10 would recommend!',
      stars: [1,2,3,4,5]
    },
    {
      name: 'Anika Crawley',
      review: 'The quality of the carpentry was exquisite. I love my new popcorn ceilings!',
      stars: [1,2,3,4,5]
    },
    {
      name: 'Rob Crawley',
      review: 'This is a fake review! It\'s my company, and I want it to look good!',
      stars: [1,2,3,4,5]
    },
  ]

// /*
  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = index + 1;
      if (newIndex < reviews.length) {
        setIndex(newIndex);
      } else {
        setIndex(0);
      }
    }, 5500);
    return () => clearInterval(interval);
  }, [index, reviews.length]);
// */

  return <div className='reviews' >
    <h3>WHAT OUR CUSTOMERS THINK</h3>
    <div className='review'>
      <p className='review_review'>
        "{reviews[index].review}"
      </p>
      <p className='review_name'>— {reviews[index].name}</p>
      {reviews[index].stars.map(element => {
        return <img className='review_star'
        src={'http://assets.stickpng.com/images/580b585b2edbce24c47b2913.png'}
        alt="review star"
        key={element}/>
      })}
    </div>
  </div>
}

export default Reviews;