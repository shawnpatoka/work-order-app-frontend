import { useEffect, useRef } from 'react'
import { Button, Container, Typography, Card, CardContent, Grid } from "@mui/material"
import PageTitle from "../components/PageTitle"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => labels.map(() => generateRandomNumber(-1000, 1000))),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};


function HomePage() {



  return (
    <>
      <PageTitle title="Home" />
      <Container sx={{ mt: 2 }}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3">Spot 1</Typography>
                <Line options={options} data={data} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3">Spot 2</Typography>
                <Line options={options} data={data} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3">Hours</Typography>
                <Line options={options} data={data} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid optio repellendus accusamus iste quaerat, tempore deserunt officia assumenda. Ea dolorem molestias autem voluptatibus delectus commodi repudiandae reprehenderit dolor fuga rem?</Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default HomePage