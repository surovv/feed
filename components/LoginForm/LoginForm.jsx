import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import { Form } from '../Form';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const formData = {
  submitLabel: 'Login',
  fields: [
    {
      key: 'email', type: 'email', label: 'Email', defaultValue: '', required: true,
    },
    {
      key: 'password', type: 'password', label: 'Password', defaultValue: '', required: true,
    },
  ],
};

export const LoginForm = () => {
  const router = useRouter();

  const [login] = useMutation(LOGIN_MUTATION);

  const handleSubmit = (variables) => login({
    variables,
  }).then(({ data: { login: { token } } }) => {
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
