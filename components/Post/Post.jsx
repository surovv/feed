import PropTypes from 'prop-types';

import { UpvoteButton } from './components/UpvoteButton';
import { Votes } from './components/Votes';
import { PostContainer, Details } from './Post.styled';

export const Post = ({
  id, url, description, votes,
}) => (
  <PostContainer>
    <a href={url} target="_blank" rel="noreferrer">{description}</a>

    <Details>
      <UpvoteButton linkId={id} />
      <Votes votes={votes} postDescription={description} />
    </Details>
  </PostContainer>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  votes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
