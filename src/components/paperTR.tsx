import * as React from 'react'
import { Paper, Grid } from '@mui/material'
import Mcard from './card/card'
import { useAppSelector } from '../app/hooks'
import { darkMode } from '../features/layoutSlice'

export default function PaperTR() {
  const dark = useAppSelector(darkMode)
  return (
    <Paper
      elevation={5}
      sx={{
        padding: '10px',
        background: dark ? '#203239' : '#D1D1D1',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Mcard cardId={2} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mcard cardId={3} />
        </Grid>
      </Grid>
    </Paper>
  )
}