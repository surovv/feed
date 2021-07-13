import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import { Avatar, Info, UserLabel } from './Votes.styled';

const AVATARS_COUNT = 3;

export const Votes = ({ votes, postDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Info type="button" onClick={openModal}>
        {votes.slice(0, AVATARS_COUNT).map(({ id, user }) => (
          <Avatar key={id}>
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
        ))}
        {votes.length > AVATARS_COUNT && `... ${votes.length - AVATARS_COUNT} more upvotes`}
        {votes.length === 0 && 'no upvotes'}
      </Info>
      <ReactModal
        isOpen={isModalOpen}
        ariaHideApp={false}
      >
        <button type="button" onClick={closeModal}>x</button>
        <div>
          Users who upvoted
          {' '}
          {postDescription}
        </div>
        <div>
          {votes.map(({ id, user }) => (
            <UserLabel key={id}>{user.name}</UserLabel>
          ))}
        </div>
      </ReactModal>
    </>
  );
};

Votes.propTypes = {
  votes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  postDescription: PropTypes.string.isRequired,
};
