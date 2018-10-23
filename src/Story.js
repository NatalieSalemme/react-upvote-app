import React from 'react';

class Story extends React.Component {
  render() {
    const { title, description, url, votes, author, authorAvatar, storyImage } = this.props;
    return (
      <div className="story-container">
        <a href={url} target="_blank">
        <h3 className="title">{title}</h3>
        </a>
        <p className="description">{description}</p>
        <p className="votes">{votes}</p>
        <p className="author-avatar">{authorAvatar}</p>
        <p className="author">{author}</p>
        <img className="story-img" src={storyImage} />

      </div>
    );
  }
}
export default Story;
