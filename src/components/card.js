import { Box } from '@chakra-ui/react'

const Card = ({ children }) => {
  return (
    <Box
      style={{
        padding: '1rem',
        transition: 'color 0.15s ease, border-color 0.15s ease'
      }}
    >
      {children}
    </Box>
  )
}

export default Card
