import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { HeaderContainer, Label } from './Header.styled';

const defaultPaths = [
  { path: '/feed', title: 'feed' },
  { path: '/login', title: 'login' },
  { path: '/sign-up', title: 'sign up' },
];

export const Header = ({ paths }) => {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      {paths.map(({ path, title }) => (
        <Link key={path} href={path}>
          <Label isActive={pathname === path}>{title}</Label>
        </Link>
      ))}
    </HeaderContainer>
  );
};

Header.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

Header.defaultProps = {
  paths: defaultPaths,
};
