import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import HomeIcon from '../images/home.svg';

const Crumbs = styled.div`
  margin: 16px 0 -16px;

  svg {
    position: relative;
    top: -1px;
  }
`;

const Separator = styled.span`
  display: inline-block;
  margin: 0 12px;
  font-size: 80%;
  color: rgba(3, 169, 143, 0.6);

  &:last-child {
    display: none;
  }
`;

const Breadcrumbs = ({ list = [] }) => {
  const listWithHome = [['/', <HomeIcon />], ...list];

  return (
    <Crumbs>
      {listWithHome.map(([href, label]) => (
        <Fragment key={href}>
          <Link to={href}>{label}</Link>
          <Separator>→</Separator>
        </Fragment>
      ))}
    </Crumbs>
  );
};

export default Breadcrumbs;
