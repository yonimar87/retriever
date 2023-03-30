import React, { useState } from 'react'
import {
  Box,
  Button,
  styled,
  Typography,
} from '@mui/material'
import { QuotePreview } from '../types/types'
import Preview from '../components/Preview/Preview'

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
  const id = 'cfd708724351461887e3fa2ced5b3a83kEH-sv7HdVZsawDs5pcp_BrE2B_Ct7sF'

  return (
    <>
    <PortalContainer>
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
        >
          Show details
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
