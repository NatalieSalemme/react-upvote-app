import React from 'react'

const JimHalpert = () => {
  return (
    <div>
      <h3>Jim Halpert</h3>
      <img
        className='bio-pic'
        src={require('../images/jim-halpert-bio.jpg')}
        alt='jim halpert bio'/>
      <p className="bio">Jim Halpert is a laid back guy who loves to show his comedy skills to his
      co-workers and friends every day. Don't be surprised if you end up a victim
    of one of his funny pranks, since you'll never see it coming. In his free time,
  he likes to see what pranks will give the most shock value. Once he figures out
what he wants to do, he will start his planning. The workers at the store must think
he is a big freak, but Jim knows that cashier's can't judge his strange purchases
if he buys a birthday card along with it.</p>
    </div>
  );
}
export default JimHalpert;
