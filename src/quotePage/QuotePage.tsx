import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  styled,
  Typography,
} from '@mui/material'
import { QuotePreview } from '../types/types'
import Preview from '../components/Preview/Preview'
import DetailedHeader from '../components/DetailedHeader/DetailedHeader'
import { getQuotePreview } from '../api/apiCalls';

interface QuotePageProps {
  
}

export const PortalContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#D3D3D3',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '36px',
  gap: '50px',
  flex: '1 1 0px',
  height: 'calc(100vh - 150px)',
  overflow: 'auto',
}))

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'row',
  position: 'sticky',
  bottom: 0,
  zIndex: '1px',
  padding: '16px 24px',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '40px',
}))

export const Row = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}))


const QuotePage = ({
  
}: QuotePageProps) => {
  const [quote, setQuote] = useState<QuotePreview>()
  const [showDetails, setShowDetails] = useState<Boolean>(false)
  const quoteId = 'b18e017978a5419198abbc3ac139bbb5hsv80eDhGnyyD5XLFk_yVDIptRTGatiD';

  useEffect(() => {
    getQuotePreview(quoteId)
      .then(data => {
        setQuote(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  const onClick = () => setShowDetails(!showDetails)
  return (
    <>
    <PortalContainer>
      {showDetails && quote && <DetailedHeader quote={quote}/>}
      {quote && (
        <Preview
          quote={quote}
        />
      )}
    </PortalContainer>
    <FooterContainer>
      <Row>
        <Button
          variant="contained"
          onClick={onClick}
          color={showDetails ? 'secondary' : 'primary'}
        >
          {showDetails ? 'Hide details' : 'Show Details'}
        </Button>
      </Row>
      <Row sx={{ gap: '5px' }}>
        <Typography variant="subtitle2">{quote ? `${Number(quote?.total).toFixed(2)}` : ''}</Typography>
        <Typography variant="body2" color="text.disabled">AUD</Typography>
      </Row>
    </FooterContainer>
    </>
  )
}

export default QuotePage
