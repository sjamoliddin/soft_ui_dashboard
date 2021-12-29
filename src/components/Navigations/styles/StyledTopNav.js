import styled from 'styled-components'
import { colors, FlexBetween } from '../../../GlobalStyles'
import { NavLink } from 'react-router-dom'

export const StyledTopNav = styled(FlexBetween)`
  width: 80%;
  margin: 1rem auto;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  background: transparent;
  z-index: 2;
  padding: .7em 2em;
  border-radius: 2rem;
  box-shadow: 0px 2px 7px -6px rgba(0, 0, 0, 1);
  backdrop-filter: saturate(200%) blur(30px);
}

  h4{
    color: ${colors.iconColor};
  }

  button {
    border-radius: 2rem;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const StyledNavLink = styled(NavLink)`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  color: ${colors.darkTextColor};
  transition: color 400ms ease;

  .icon {
    font-size: 1.15rem;
    margin-top: 0.3em;
  }

  .text {
    font-size: 1rem;
    margin-left: 0.2em;
    font-weight: 500;
  }

  &.active,
  &:hover {
    color: ${colors.darkTextHoverColor};
  }
`