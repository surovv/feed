import { isBrowser } from '../../lib/checks';
import { PostForm } from './components/PostForm';
import { Posts } from './components/Posts';

export const Feed = () => {
  const token = isBrowser() && localStorage.getItem('token');

  return !!token && (
    <div>
      Feed
      <PostForm />
      <Posts />
    </div>
  );
};
