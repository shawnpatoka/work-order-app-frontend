import { Typography, Container } from "@mui/material"
import PageTitle from "../components/PageTitle"

function PeoplePage() {
  return (
    <>
      <PageTitle title="People" />
      <Container sx={{ mt: 2 }}>
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
      </Container>
    </>
  )
}

export default PeoplePage