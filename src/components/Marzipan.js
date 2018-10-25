import React from 'react';
import { Link } from 'react-router-dom';

const Marzipan = () => {
  return (
    <div>
      <div className="row">
        <Link
          className="author-link"
          to='/michaelscott'>
          <span className="author">Michael Scott</span>
        </Link>
      <Link
        to='/michaelscott'>
      <img
        className='author-avatar'
        src={require('../images/michael.jpg')}
        alt='Michael Scott' />
      </Link>
     </div>



      <h2>De La Rosa might not crumble?</h2>
      <img
        className='story-page-img'
        src={require('../images/marzipan-story.jpg')}
        alt="marzipan"/>
        <p className="story-text">The popular Mexican peanut butter treat, Marzipan from the famous brand,
          De La Rosa, is making headlines today due to a photo that went viral
          of 4 marzipan's stacked on top of each other in a Jenga formation. Previously,
          it was common knowledge that it was almost impossible to eat one of these
          sweet treats without it crumbling into a million pieces. But this photo
          uploaded by an anonymous person has proved that theory different. Since
          this photo came out, the De La Rosa stock has risen by over 18% in just
          a few hours since the release. Many stores have now reported to have sold
          out of all of their Marzipan and feel that this was the push that was needed
          to help boost the economy. With people now coming into Mexican markets for the
          first time just to get their hands on these candies, Mexican markets say
          it feels like Black Friday for them and they couldn't be happier. Get your
          hands on one of these bad boys today. The box is easily recognized by its
          yellow frame and big rose.
        </p>
    </div>
  )
}
export default Marzipan;
