import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import { Form } from '../Form';

const SIGN_UP_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

const formData = {
  submitLabel: 'Sign up',
  fields: [
    {
      key: 'name', type: 'string', label: 'Name', defaultValue: '', required: true,
    },
    {
      key: 'email', type: 'email', label: 'Email', defaultValue: '', required: true,
    },
    {
      key: 'password', type: 'password', label: 'Password', defaultValue: '', required: true,
    },
  ],
};

export const SignUpForm = () => {
  const router = useRouter();

  const [signUp] = useMutation(SIGN_UP_MUTATION);

  const handleSubmit = (variables) => signUp({
    variables,
  }).then(({ data: { signup: { token } } }) => {
    localStorage.setItem('token', token);
    return router.push('/feed');
  });

  return (
    <Form
      {...formData}
      handleSubmit={handleSubmit}
    />
  );
};
