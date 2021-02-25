import React, {useEffect, useState} from 'react';
import ReviewStar from '../Styles/Assets/ReviewStar.png';

const Reviews = props => {
  const [index, setIndex] = useState(1);
  const reviews = [
    {
      name: 'Eren J.',
      review: "They were fast, efficient, and professional. We'll definitely hire them again for our next project!",
      stars: [1,2,3,4,5]
    },
    {
      name: 'Levi A.',
      review: "They did such a great job finishing our basement. Their team was responsive and clear on cost and timelines.",
      stars: [1,2,3,4,5]
    },
    {
      name: 'Edward E.',
      review: 'We were extremely impressed with the quality of work they provided and would highly recommend.',
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
    }, 6500);
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
        src={ReviewStar}
        alt="review star"
        key={element}/>
      })}
    </div>
  </div>
}

export default Reviews;