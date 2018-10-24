import React from 'react';

const MichaelScott = () => {
  return (
    <div>
      <h3>Michael Scott</h3>
      <img
        className='bio-pic'
        src={require('../images/michael-scott-bio.jpg')}
        alt='Michael Scott bio'
      />
      <p className="bio">Michael Scott is the regional manager for a small paper company
      in Scranton, PA, and he absolutely loves his job. He considers himself
    "Worlds Best Boss" and he drinks from the mug with that quote each and
  every day. Michael has never worked anywhere else in his life and during
his free time, when he's just hanging out in his condo, he likes to write
articles for things he has an interest in. He is very opinionated and will
give you 1 side of the story (the best side) in his eyes. If you want someone
to reliably give you good content, you can count on Michael. He has no kids and
has more free time than he knows what to do with. He is known for making grand
gestures to show the people he loves that he cares about them very much. </p>
    </div>
  );
}
export default MichaelScott;
