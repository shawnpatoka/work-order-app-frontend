import { Container, Box } from "@mui/material"


function MainSection({ children }) {
  return (
    <Box sx={{ flexGrow: 1, overflowY: 'auto', bgcolor: 'primary.light' }}>
      <Container sx={{ mt: 2 }}>
        {children}
      </Container>
    </Box>
  )
}

export default MainSection