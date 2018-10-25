import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


class Story extends React.Component {
  render() {
    const { title, description, votes, author, authorAvatar, storyImage,
      onUpVote, onDownVote, id, tags, componentPath} = this.props;
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
        <Link to={`/${componentPath}`} >
        <img
          className="story-img"
          src={require(`${storyImage}`)}
          alt={title.split(' ').slice(0, 3).join(' ')} />
        </Link>

      </div>
      <div>
        <Link
          to={`/${componentPath}`}
          className="title-link">
          <h2 className="title">{title}</h2>
        </Link>
        <p className="description">{description}</p>
        <ul className="tags">
          {tagItem}
        </ul>
        <div className="author-container">
          <div className="author-text">
            <span>Posted by:</span>
          <Link
            className="author-link"
            to={author.toLowerCase().split(' ').join('')}>
            <span className="author">{author}</span>
          </Link>
        </div>
        <Link
          to={author.toLowerCase().split(' ').join('')}>
        <img className="author-avatar"
            src={require(`${authorAvatar}`)}
            alt={author} />
        </Link>

      </div>
      </div>

      </div>
    );
  }
}
export default Story;
