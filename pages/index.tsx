import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import Banner from '../components/Banner/Banner'

const Home: NextPage = () => {
  return (
    <Grid container>
      <Grid item><Banner/></Grid>
    </Grid>
  )
}

export default Home
