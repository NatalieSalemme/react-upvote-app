import React from 'react';

class Story extends React.Component {

  render() {
    const { title, description, url, votes, author, authorAvatar, storyImage } = this.props;
    return (
      <div className="story-container">
        <div>
        <p className="votes">{votes}</p>
        <img
          className="story-img"
          src={require(`${storyImage}`)}
          alt={title.split(' ').slice(0, 3).join(' ')}
          rel="noopener noreferrer"
        />
      </div>
      <div>
        <a className="title-link" href={url} target="_blank">
        <h2 className="title">{title}</h2>
        </a>
        <p className="description">{description}</p>
        <p className="author-avatar">{authorAvatar}</p>
        <p className="author">Posted by: {author}</p>
      </div>

      </div>
    );
  }
}
export default Story;
