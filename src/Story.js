import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Story extends React.Component {

  render() {
    const { title, description, url, votes, author, authorAvatar, storyImage } = this.props;
    const arrowUp = <FontAwesomeIcon icon={faArrowUp} size="lg" />
    const arrowDown = <FontAwesomeIcon icon={faArrowDown} size="lg" />
    return (
      <div className="story-container">
        <div className="arrow-container">
          <p className="arrow-up-icon">{arrowUp}</p>
          <p className="votes">{votes}</p>
          <p className="arrow-down-icon">{arrowDown}</p>
        </div>
        <div>
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
