import React from 'react';

const Skinwars = () => {
  return (
    <div>
      <h3>Skin Wars ratings to beat Great British Baking Show.</h3>
      <img
        className='story-page-img'
        src={require('../images/skinwars-story.jpg')}
        alt='Giraffe painted on legs'/>
      <p className="story-text">Back by popular demand, Skin Wars on Netflix has now come out with it's 3rd
      season and the audience is more engaged than ever. The ratings on Skin Wars has
    now surpassed the ratings on the popular UK-based TV show: British Baking Show.
    The reason for this, is that many people have experience baking, but what the Great
  British Baking Show lacks is the competitive nature that the US competition shows
usually have. Skin Wars is a great combination of both the competitive nature of a
TV show for a grand prize of $100,000 as well as the creative aspect of designing
and creating a piece on a person's body with paint, something many of us have never,
nor will ever get to experience. When the competitors are competing not only for
a painting line with a popular designer, but such a big amount of money, it makes
for great TV as we are able to see the people week after week, after their tensions
build. They also live together, which helps make for great content because in the challenges,
oftentimes, the winner will get the advantage of taking time away from another competitor,
and if they do not have that friendship with the winner, they are at risk of being
put at a disadvantage in terms of time. </p>
    </div>
  );
}

export default Skinwars;
