import React, {useEffect, useState} from 'react';
import ReviewStar from '../Styles/Assets/ReviewStar.png';

const Reviews = props => {

// ===== ===== DATA BEG ===== =====

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

// ===== ===== DATA END ===== =====
// ===== ===== FUNCTIONS BEG ===== =====

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

// ===== ===== FUNCTIONS END ===== =====
// ===== ===== 'COMPONENTS' BEG ===== =====

  let review = <div className='review'>
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

// ===== ===== 'COMPONENTS' END ===== =====

  return <div className='reviews' >
    <h3>WHAT OUR CUSTOMERS THINK</h3>
    { review }
  </div>
}

export default Reviews;