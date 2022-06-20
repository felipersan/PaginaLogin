import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: fixed;
  overflow: hidden;
`
export const Menu = styled.div`
  width: 14vw;
  background-color: #fff;
  height: 100vh;
`

export const Posts = styled.div`
  height: 100vh;
  margin: 0;
  width: 86vw;
  background-color: #f3f3f3;
`

export const Logo = styled.img`
  width: 11.87rem;
  height: 3.56rem;
  margin-top: 3.125rem;
  margin-left: 2.18rem;
  margin-right: 2.18rem;
`

export const AreaMenu = styled.div`
  margin-top: 2.37rem;
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
`

export const Header = styled.div`
  height: 7rem;
  width: 100%;
  margin: 0;
  position: absolute;
`

export const UserEmail = styled.h2`
  font-size: 1.6rem;
  padding-left: 2.93rem;
  color: #000;
  opacity: 0.4;
  font-weight: 400;
  margin-top: 2.5rem;
`
export const Component = styled.div`
  background-color: #000;
  opacity: 0.18;
  height: 1px;
  width: 99rem;
  margin-right: 2.95rem;
  margin-left: 2.95rem;
  position: absolute;
  bottom: 0;
`

export const ArePosts = styled.div`
  margin-top: 8.75rem;
  margin-left: 2.95rem;
  width: 99rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 14.25rem 14.25rem;
  grid-gap: 1.31rem;
`
