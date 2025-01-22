import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

import *  as first from '../../styles/theme';

import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          
            backgroundColor: `${first.theme.colors.dark}`,

          
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          variants:[
            {
              props: { variant: 'body3' },
                style: {
                  fontSize: 15    ,
                  
                color: `${first.theme.colors.light}`,
              }
              


            },
            {
              props: { variant: 'h6' },
              style: {
                fontSize: 20,
                color: `${first.theme.colors.secondary}`,
              }
            }
          ]
        }
      }
    }
  },
});



export default function ReviewCard({ person, review, score }) {
  return (

    <ThemeProvider theme={theme}>
    <Card  >
      <CardContent>
        <Typography variant="h6">{person} {score}</Typography>
        <Typography variant="body3" >
          {review}
          
        </Typography>
        <Typography variant="body" color="text.secondary">
          
        </Typography>
      </CardContent>
    </Card>
    </ThemeProvider>
  )
}

ReviewCard.propTypes = {
  person: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired
}
