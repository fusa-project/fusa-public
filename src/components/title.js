import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  width: 100%;
`

const Title = ({ label }) => {
  return <H1>{label}</H1>
}

export default Title
