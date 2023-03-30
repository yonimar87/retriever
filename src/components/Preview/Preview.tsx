import React from 'react'
import {
  Box,
  styled,
  Typography,
} from '@mui/material'
import { QuotePreview } from '../../types/types'
import PreviewTable from './PreviewTable'
import { getAddressString } from '../../utils/Utils'

interface PreviewProps {
  quote: QuotePreview,
}

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
  padding: '20px 32px',
}))

const DetailsSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: 0,
  backgroundColor: theme.palette.background.paper,
  gap: '5px',
}))

const BillingDetail = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '5px',
}))

const Preview = ({
  quote,
}: PreviewProps) => (
  <PreviewContainer>
    <DetailsContainer>
      <DetailsSubContainer>
        <Typography variant="subtitle2">{quote.recipientName}</Typography>
        <Typography variant="body2">{getAddressString(quote?.address)}</Typography>
        <Typography variant="body2">{quote.recipientEmail}</Typography>
        <Typography variant="body2">{quote.recipientPhone}</Typography>
      </DetailsSubContainer>
      <DetailsSubContainer>
        <Typography variant="subtitle2">Quote</Typography>
        <BillingDetail>
          <Typography variant="body2" color="grey">Quote number:</Typography>
          <Typography variant="body2">{quote.quoteNumber}</Typography>
        </BillingDetail>
        <BillingDetail>
          <Typography variant="body2" color="grey">Quote date:</Typography>
          <Typography variant="body2">{quote.dateCaptured ? new Date(quote.dateCaptured).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''}</Typography>
        </BillingDetail>
        <BillingDetail>
          <Typography variant="body2" color="grey">Expiry:</Typography>
          <Typography variant="body2">{quote.expiry ? new Date(quote.expiry).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''}</Typography>
        </BillingDetail>
      </DetailsSubContainer>
    </DetailsContainer>
    <PreviewTable
      // TODO
    />
  </PreviewContainer>
)

export default Preview
