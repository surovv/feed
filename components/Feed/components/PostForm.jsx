import { gql, useMutation } from '@apollo/client';

import { Form } from '../../Form';

const POST_MUTATION = gql`
  mutation post($url: String!, $description: String!) {
    post(url: $url, description: $description) {
      id
    }
  }
`;

const formData = {
  submitLabel: 'post',
  fields: [
    {
      key: 'url', type: 'text', label: 'url', defaultValue: '', required: true,
    },
    {
      key: 'description', type: 'text', label: 'description', defaultValue: '', required: true,
    },
  ],
};

export const PostForm = () => {
  const [post] = useMutation(POST_MUTATION);

  const handleSubmit = (variables) => post({
    variables,
  });

  return (
    <Form
      {...formData}
      handleSubmit={handleSubmit}
    />
  );
};
