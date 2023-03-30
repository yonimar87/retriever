import React from 'react'
import {
  styled,
  Table as MuiTable,
  TableContainer,
} from '@mui/material'

interface PortalTableProps {
  // TODO
}

const Table = styled(MuiTable)(() => ({
  tableLayout: 'fixed',
}))

const PreviewTable = ({
  // TODO
}: PortalTableProps) => {

  return (
    <TableContainer>
      <Table>
        {/* TODO */}
      </Table>
    </TableContainer>

  )
}

export default PreviewTable
