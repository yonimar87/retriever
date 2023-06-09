import {
  styled,
  Table as MuiTable,
  TableContainer,
  TableBody, TableCell, TableHead, TableRow, Typography
} from '@mui/material'
import {formatToCurrency} from '../../utils/Utils'
import { LineItem } from '../../types/types'

interface PortalTableProps {
  // TODO
}

const Table = styled(MuiTable)(() => ({
  tableLayout: 'fixed',
}))

const HeaderStyledRow = styled(TableRow)(() => ({
  backgroundColor: "rgba(239, 239, 240)",
  border: "1px solid white"
}))
   

const BodyStyledTableCell = styled(TableCell)(() => ({
  border: "none"
}))

const PreviewTable = ({materialTypeArray, serviceTypeArray, quote, filter}: any) => {
  return (
    <TableContainer>
      <Table>
      <TableHead>
          <HeaderStyledRow>
            <TableCell width="55%"><Typography color="grey">Description</Typography></TableCell>
            <TableCell width="15%"><Typography color="grey">Quantity</Typography></TableCell>
            <TableCell width="15%"><Typography color="grey">Unit Price</Typography></TableCell>
            <TableCell width="15%"><Typography color="grey">Amount</Typography></TableCell>
          </HeaderStyledRow>
      </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Services</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          {serviceTypeArray.map((row: LineItem) => (
            <TableRow key={row.name}>
              <BodyStyledTableCell component="th" scope="row">
                <Typography variant="body2" color="grey">{row.name}</Typography>
              </BodyStyledTableCell>
              <BodyStyledTableCell>{row.unitAmount}</BodyStyledTableCell>
              <BodyStyledTableCell><Typography variant="body2">${formatToCurrency(row.saleCost)}</Typography></BodyStyledTableCell>
              <BodyStyledTableCell><Typography variant="body2">${formatToCurrency(row.subtotal)}</Typography></BodyStyledTableCell>
              </TableRow>))}
            <TableRow>
                <TableCell>Materials</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
            </TableRow>
            {materialTypeArray.map((row: LineItem) => (
              <TableRow key={row.name}>
              <BodyStyledTableCell component="th" scope="row">
                <Typography variant="body2" color="grey">{row.name}</Typography>
              </BodyStyledTableCell>
              <BodyStyledTableCell>{row.unitAmount}</BodyStyledTableCell>
              <BodyStyledTableCell><Typography variant="body2">${formatToCurrency(row.saleCost)}</Typography></BodyStyledTableCell>
              <BodyStyledTableCell><Typography variant="body2">${formatToCurrency(row.subtotal)}</Typography></BodyStyledTableCell>
              </TableRow>
            ))}
            <TableRow>
              <BodyStyledTableCell></BodyStyledTableCell>
              <BodyStyledTableCell></BodyStyledTableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell><Typography variant="body2">${formatToCurrency(quote.subtotal)}</Typography></TableCell>
            </TableRow>
            <TableRow>
              <BodyStyledTableCell></BodyStyledTableCell>
              <BodyStyledTableCell></BodyStyledTableCell>
              <TableCell>Taxes</TableCell>
              <TableCell><Typography variant="body2">${formatToCurrency(quote.taxTotal)}</Typography></TableCell>
            </TableRow>
            <TableRow>
              <BodyStyledTableCell></BodyStyledTableCell>
              <BodyStyledTableCell></BodyStyledTableCell>
              <TableCell>Total</TableCell>
              <TableCell><Typography variant="body2">${formatToCurrency(quote.total)}</Typography></TableCell>
            </TableRow>
        </TableBody>    
          </Table>
    </TableContainer>

  )
}

export default PreviewTable
