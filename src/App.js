import React, { Component } from 'react';
import './App.css';
import Story from './Story';


class App extends Component {
  state = {
    stories: []
  };


  componentDidMount() {
    this.setState({
      stories: stories
    });

  }

  render() {
    const storiesList = stories.map((story) => (
        <Story
          key={story.id}
          id={story.id}
          title={story.title}
          description={story.description}
          url={story.url}
          votes={story.votes}
          authorAvatar={story.authorAvatar}
          storyImage={story.image}
          />
    ));

    return (
      <div className="App">
        <h1>Trending News</h1>
        {storiesList}
      </div>
    );
  }
}

export default App;

const stories = [
  {
    id: 1,
    title: 'De La Rosa might not crumble?',
    description: 'Popular Mexican candy breaks apart and does not crumble anymore',
    url: 'https://www.mymexicancandy.com/mexican-candy/peanuts-cacahuates/de-la-rosa-mazapan-30-piece-pack-count/',
    votes: 22,
    authorAvatar: '',
    storyImage: ''
  },
  {
    id: 2,
    title: 'Skin Wars ratings to beat Great British Baking Show',
    description: 'The popularity of art is growing as a craving for puff pastries declines',
    url: 'https://en.wikipedia.org/wiki/Skin_Wars',
    votes: 39,
    authorAvatar: '',
    storyImage: ''
  },
  {
    id: 3,
    title: 'Water is wet and other ridiculous things you should know by now',
    description: 'If you do not know what is happening in this world, it is time to start learning',
    url: 'https://www.debate.org/opinions/is-water-wet',
    votes: 54,
    authorAvatar: '',
    storyImage: ''
  },
  {
    id: 4,
    title: 'Santa Claus conspiracy: Does he really have reindeer?',
    description: 'Everyone talks about seeing Santa Claus but there are 0 witnesses who have seen a reindeer',
    url: 'https://www.washingtonpost.com/lifestyle/style/officials-everywhere-are-now-perpetuating-the-santa-conspiracy-to-your-kids/2015/12/18/6836e0ac-a443-11e5-ad3f-991ce3374e23_story.html?noredirect=on&utm_term=.5a57b7ea8b67',
    votes: 18,
    authorAvatar: '',
    storyImage: ''
  },
];
