window.Seed = (function () {
  function randomVoteCount() {
    return Math.floor((Math.random() * 30));
  }
  const stories = [
    {
      id: 1,
      title: 'De La Rosa might not crumble?',
      description: 'Popular Mexican candy breaks apart and does not crumble anymore',
      url: '#',
      votes: randomVoteCount(),
      authorAvatar: '',
      storyImage: ''
    },
    {
      id: 2,
      title: 'Skin Wars ratings to beat Great British Baking Show',
      description: 'The popularity of art is growing as a craving for puff pastries declines',
      url: '#',
      votes: randomVoteCount(),
      authorAvatar: '',
      storyImage: ''
    },
    {
      id: 3,
      title: 'Water is wet and other ridiculous things you should know by now',
      description: 'If you do not know what is happening in this world, it is time to start learning',
      url: '#',
      votes: randomVoteCount(),
      authorAvatar: '',
      storyImage: ''
    },
    {
      id: 4,
      title: 'Santa Claus conspiracy: Does he really have reindeer?',
      description: 'Everyone talks about seeing Santa Claus but there are 0 witnesses who have seen a reindeer',
      url: '#',
      votes: randomVoteCount(),
      authorAvatar: '',
      storyImage: ''
    },
  ];

  return { stories: stories },
}());
