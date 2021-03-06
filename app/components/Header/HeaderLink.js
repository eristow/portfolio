import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderLink = styled(Link).attrs(props => ({
  color: props.color || '#bb86fc',
}))`
  display: inline-flex;
  padding: 0.7em 0.5em;
  margin: 0.4em 0.4em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  max-width: 75px;
  min-width: 75px;
  min-height: 25px;
  text-align: center;
  border: 2px solid ${props => props.color};
  color: ${props => props.color};

  &:active {
    background: ${props => props.color};
    color: white;
  }
`;

HeaderLink.propTypes = {
  color: PropTypes.string,
};

export default HeaderLink;
