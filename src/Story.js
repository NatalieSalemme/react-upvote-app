import React from 'react';

class Story extends React.Component {
  render() {
    const { title, description, url, votes, authorAvatar, storyImage } = this.props;
    return (
      <div className="story-container">
        <a href={url} target="_blank">
        <h3 className="title">{title}</h3>
        </a>
        <p className="description">{description}</p>
        <p className="votes">{votes}</p>
        <p className="author-avatar">{authorAvatar}</p>
        <p className="story-img">{storyImage}</p>

      </div>
    );
  }
}
export default Story;
