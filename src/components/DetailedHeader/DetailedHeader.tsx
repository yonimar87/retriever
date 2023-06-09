import {
  Box,
  styled,
  Typography,
} from '@mui/material'
import { PreviewProps } from '../../types/types'

const PreviewContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0 0 32px 0',
  backgroundColor: theme.palette.background.paper,
  boxShadow: `0px 24px 48px -12px ${theme.palette.action.focus}`,
  borderRadius: '12px',
  width: '800px',
  alignSelf: 'center',
}))

const DetailsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignSelf: 'center',
  padding: '20px 32px',
}))

const DetailsSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'centre',
  padding: 0,
  backgroundColor: theme.palette.background.paper,
  gap: '5px',
}))

const DetailedHeader = ({
  quote,
}: PreviewProps) => {

  return (
  <PreviewContainer>
    <DetailsContainer>
      <DetailsSubContainer>
        <Typography align="center" variant="h2">{quote?.quoteNumber}</Typography>
        <Typography align="center" variant="body2">{quote?.orgHeader.address.address1}</Typography>
        <Typography align="center" variant="body2">{quote?.orgHeader.email}</Typography>
      </DetailsSubContainer>
    </DetailsContainer>
  </PreviewContainer>
)}

export default DetailedHeader
