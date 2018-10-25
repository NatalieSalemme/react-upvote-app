import React from 'react';

const Water = () => {
  return (
    <div>
      <div className="row">
      <h2>Posted by: Pamela Beesly</h2>
      <img
        src={require('../images/pam.jpg')}
        alt="Pam Beesly avatar"
        className="author-avatar"/>
      </div>
      <h3>Water is wet and other ridiculous things you should know by now.</h3>
      <img
        className="story-page-img"
        src={require('../images/water-story.jpg')}
        alt="Water droplet"/>
      <p className="story-text">
        There is a debate on whether water is wet or if it is not. What is interesting is
        that the people who are arguing that water is not wet are not saying what
        exactly water is, in what state. I am under the impression that water is
        wet because it is not dry, much like air is dry because it is not wet. The fact
        that dry and wet are two different things that are opposite, it is easy to
        see that water is indeed wet. Water is the source that causes other things
        to become wet, so in essence, it is itself, the source of wet itself, so that
        means that water is wet. End of discussion. </p>
    </div>
  );
}
export default Water;
