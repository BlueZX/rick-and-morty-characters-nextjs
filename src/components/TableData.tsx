/* eslint-disable react/jsx-key */
import { Column, useTable } from 'react-table'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { CharatersType } from '../pages'

type TableDataProps = {
  data: CharatersType[]
  columns: readonly Column<CharatersType>[]
}

export const TableData: React.FC<TableDataProps> = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              })}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
