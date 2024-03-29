import { Box } from '@chakra-ui/react'

const Card = ({ children }) => {
  return (
    <Box
      style={{
        padding: '1rem',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}

export default Card
