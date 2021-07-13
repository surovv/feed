import { gql, useMutation } from '@apollo/client';
import PropTypes from 'prop-types';

const VOTE_MUTATION = gql`
  mutation vote($linkId: ID!) {
    vote(linkId: $linkId) {
      id
    }
  }
`;

export const UpvoteButton = ({ linkId }) => {
  const [vote] = useMutation(VOTE_MUTATION);

  const onClick = () => vote({
    variables: { linkId },
  });

  return (
    <button onClick={onClick} type="button">Upvote</button>
  );
};

UpvoteButton.propTypes = {
  linkId: PropTypes.number.isRequired,
};
