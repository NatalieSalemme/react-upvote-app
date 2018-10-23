import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Story from './Story';
import Marzipan from './Marzipan';
import Water from './Water';
import Santa from './Santa';
import Skinwars from './Skinwars';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';





class App extends Component {
  state = {
    stories: [],
  };

  componentDidMount() {
    this.setState({
      stories: stories
    });
  }

  handleStoryUpVote = (storyId) => {
    const updatedStories = this.state.stories.map((story) => {
      if(story.id === storyId) {
        return Object.assign({}, story, {
          votes: story.votes + 1,
        });
      } else {
        return story;
      }
    });
    this.setState({
      stories: updatedStories
    });
  }
  handleStoryDownVote = (storyId) => {
    const updatedStories = this.state.stories.map((story) => {
      if(story.id === storyId) {
        return Object.assign({}, story, {
          votes: story.votes - 1,
        });
      } else {
        return story;
      }
    });
    this.setState({
      stories: updatedStories
    });
  }


  render() {
    const stories = this.state.stories.sort((a, b) => {
      return b.votes - a.votes;
    });
    const storiesList = stories.map((story) => (
        <Story
          key={story.title.toString()}
          id={story.id}
          title={story.title}
          description={story.description}
          url={story.url}
          votes={story.votes}
          tags={story.tags}
          author={story.author}
          authorAvatar={story.authorAvatar}
          storyImage={story.storyImage}
          onUpVote={this.handleStoryUpVote}
          onDownVote={this.handleStoryDownVote}
          />
    ));

    return (
      <BrowserRouter>
      <div className="App">
        <h1>Trending News</h1>
        {/* {storiesList} */}
        <Route exact path="/" component={Home} />
        <Route path="/marzipan" component={Marzipan} />
        <Route path="/water" component={Water} />
        <Route exact path="/santa" component={Santa} />
        <Route path="/skinwars" component={Skinwars} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

const randomVote = () => {
  return Number(Math.floor(Math.random() * 70));
}

const stories = [
  {
    id: 1,
    title: 'De La Rosa might not crumble?',
    description: 'Popular Mexican candy breaks apart and does not crumble anymore',
    url: 'https://www.mymexicancandy.com/mexican-candy/peanuts-cacahuates/de-la-rosa-mazapan-30-piece-pack-count/',
    votes: randomVote(),
    tags: ['#MexicanCuisine', '#SweetTooth', '#PeanutButter'],
    authorAvatar: './images/michael.jpg',
    author: 'Michael Scott',
    storyImage: './images/marzipan.png'
  },
  {
    id: 2,
    title: 'Skin Wars ratings to beat Great British Baking Show',
    description: 'The popularity of art is growing as a craving for puff pastries declines',
    url: 'https://en.wikipedia.org/wiki/Skin_Wars',
    votes: randomVote(),
    tags: ['#GBBS', '#SkinWars', '#RealityTV', '#Contest'],
    authorAvatar: './images/jim.jpg',
    author: 'Jim Halpert',
    storyImage: './images/skinwars.jpg',
  },
  {
    id: 3,
    title: 'Water is wet and other ridiculous things you should know by now',
    description: 'If you do not know what is happening in this world, it is time to start learning',
    url: 'https://www.debate.org/opinions/is-water-wet',
    votes: randomVote(),
    tags: ['#CommonKnowledge', '#Education', '#H20'],
    authorAvatar: './images/pam.jpg',
    author: 'Pamela Beasley',
    storyImage: './images/water.jpg'
  },
  {
    id: 4,
    title: 'Santa Claus conspiracy: Does he really have reindeer?',
    description: 'Everyone talks about seeing Santa Claus but there are 0 witnesses who have seen a reindeer',
    url: 'https://www.washingtonpost.com/lifestyle/style/officials-everywhere-are-now-perpetuating-the-santa-conspiracy-to-your-kids/2015/12/18/6836e0ac-a443-11e5-ad3f-991ce3374e23_story.html?noredirect=on&utm_term=.5a57b7ea8b67',
    votes: randomVote(),
    tags: ['#Santa', '#Christmas', '#RudolphLiedToAllOfUs'],
    authorAvatar: './images/kelly.jpg',
    author: 'Kelly Kapoor',
    storyImage: './images/reindeer.jpg'
  },
];
