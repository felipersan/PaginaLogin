import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #ff6c22;
  align-items: center;
  justify-content: center;
`

export const AreaLogin = styled.div`
  height: 32rem;
  width: 53.56rem;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  position: relative;
`

export const Right = styled.div`
  position: relative;
  background-color: red;
  width: 24rem;
`

export const PcImage = styled.img`
  bottom: 0;
  margin-right: 3rem;
  height: 25.8rem;
  z-index: 2;
  position: absolute;
  right: 0;
`

export const BgLogin = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  z-index: 1;
`

export const Left = styled.div`
  position: absolute;
  height: 100%;
  width: 29rem;
  left: 0;
`

export const LeftContainer = styled.div`
  margin-left: 2.6rem;
  margin-top: 4.375rem;
`

export const Logo = styled.img`
  height: 4.8rem;
  width: 18.5rem;
`

export const WelCome = styled.h3`
  color: #8f8f8f;
  font-size: 1.81rem;
  margin-top: 2.75rem;
  line-height: 3rem;
`

export const AreaInput = styled.div`
  flex-direction: column;
`

export const Input = styled.input`
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px;
  }
  width: 19.16rem;
  height: 2.75rem;
  border-radius: 5px;
  border-width: 0.8px;
  border-color: #e5e5e5;
  padding-left: 0.75rem;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000;
    opacity: 0.35;
  }
  :-ms-input-placeholder {
    color: red;
  }
`

export const AreaInputPassword = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  border-width: 0.8px;
  border-color: #e5e5e5;
  border-style: solid;
  width: 19.91rem;
  height: 2.75rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputPassword = styled.input`
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px;
  }

  padding-left: 0.75rem;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.35;
  }
`
export const IconBtn = styled.a`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.62rem;
`

export const InputIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`

export const Button = styled.button`
  width: 9.43rem;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: #2eafb2;
  margin-top: 0.82rem;
  color: #fff;
`
