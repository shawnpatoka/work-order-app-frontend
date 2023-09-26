import { Container, Box } from "@mui/material"
import PageTitle from "./PageTitle"

function MainSection({ children }) {
  return (
    <>
      <PageTitle title="asdf" />
      <Container sx={{ mt: 2 }}>
        {children}
      </Container>
    </>
  )
}

export default MainSection