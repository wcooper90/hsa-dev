import styled from 'styled-components'

export const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin: auto;
`

export const Input = styled.input.attrs(({ theme }) => ({
  placeholderColor: theme.colors.fonts.placeholder,
}))`
  flex: 1;
  max-width: 500px;
  height: 40px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 16px;
  border: none;
  background: ${({ theme }) => theme.colors.layout.search};
  border-radius: 2px;
  margin-right: 10px;
  padding-left: 5px;
`

export const Button = styled.button`
  height: 40px;
  width: 110px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.layout.accent};
  color: ${({ theme }) => theme.colors.fonts.button};
  border: none;
  border-radius: 2px;

  &:hover {
    background: ${({ theme }) => theme.colors.layout.darkAccent};
    cursor: pointer;
    transition: background 0.5s ease;
  }
`


export const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fonts.header};
  display: flex;
  justify-content: center;
`

export const TodosList = styled.ul`
  list-style: none;
  flex: 1;
`

export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin-top: 20px;
`

export const NoTodos = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fonts.header};
  display: flex;
  justify-content: center;
`
