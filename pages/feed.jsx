import React from 'react';

import App from '../components/App';
import { Header } from '../components/header';
import { Feed } from '../components/feed';

const FeedPage = () => (
  <App>
    <Header />
    <Feed />
  </App>
);

export default FeedPage;
