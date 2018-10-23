import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Story extends React.Component {
  render() {
    const { title, description, url, votes, author, authorAvatar, storyImage, onUpVote, onDownVote, id, tags} = this.props;
    const arrowUp = <FontAwesomeIcon icon={faArrowUp} size="lg" />
    const arrowDown = <FontAwesomeIcon icon={faArrowDown} size="lg" />
    const tagItem = tags.map(tag => <li className="tag">{tag}</li>);
    console.log(tags);
    return (
      <div className="story-container">
        <div className="arrow-container">
          <p
            className="arrow-up-icon"
            onClick={() => onUpVote(id)}>
              {arrowUp}
          </p>
          <p className="votes">{votes}</p>
          <p
            className="arrow-down-icon"
            onClick={() => onDownVote(id)}>
            {arrowDown}
          </p>
        </div>
        <div>
        <img
          className="story-img"
          src={require(`${storyImage}`)}
          alt={title.split(' ').slice(0, 3).join(' ')}

        />
      </div>
      <div>
        <a className="title-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer">
        <h2 className="title">{title}</h2>
        </a>
        <p className="description">{description}</p>
        <ul className="tags">
          {tagItem}
          {/* {tags.map(tag => <li className="tag">{tag}</li>)} */}
        </ul>
        <div className="author-container">
          <p className="author-text">Posted by:
            <span className="author"> {author}</span>
          </p>
        <img className="author-avatar"
            src={require(`${authorAvatar}`)}
            alt={author} />

      </div>
      </div>

      </div>
    );
  }
}
export default Story;
