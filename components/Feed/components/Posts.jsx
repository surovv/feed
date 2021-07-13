import { gql, useQuery } from '@apollo/client';
import { Post } from '../../Post';

export const ALL_POSTS_QUERY = gql`
  query feed($take: Int = 10, $skip: Int = 0) {
    feed(take: $take, skip: $skip) {
      count
      links {
        id
        description
        url
        votes {
          id
          user {
            id
            name
          }
        }
      }
    }
  }
`;

export const Posts = () => {
  const { data } = useQuery(ALL_POSTS_QUERY);
  return (
    <div>
      {data?.feed?.links?.map((link) => (
        <Post key={link.id} {...link} />
      ))}
    </div>
  );
};
