import React from 'react';

const KellyKapoor = () => {
  return (
    <div>
      <h3>Kelly Kapoor</h3>
      <img
        className='bio-pic'
        src={require('../images/kelly-kapoor-bio.jpg')}
        alt='Jim Halpert bio'
      />
      <p className="bio">Kelly Kapoor is a bubbly, outgoing woman who knows how to have fun. She is
      into celebrity gossip and pop news, so if you ever need to know what is happening
    in the A-List realm, Kelly is the person to go to. She knows alot of pop culture
  references and always seems to be the underdog during trivia nights out with friends.
She will surprise you with how social she can be in any setting talking to anyone.
She is a woman that knows what she wants and she will do whatever she can to get it.</p>
    </div>
  );
}
export default KellyKapoor;
