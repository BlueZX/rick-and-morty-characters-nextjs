import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import { TableData } from 'components/TableData'
import useFetch from 'hooks/useFetch'
import { NextPage } from 'next/types'
import { useMemo, useState } from 'react'
import { Column } from 'react-table'

const LoadingComponent = () => <Text>Cargando...</Text>

type CharatersProps = {
  info: infoType
  results: CharatersType[]
}

type infoType = {
  count: number
  pages: number
  next?: string
  prev?: string
}

export type CharatersType = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
}
const Home: NextPage = () => {
  const [page, setPage] = useState(1)
  const { data, loading, refetch } = useFetch<CharatersProps>(
    `character/?page=${page}`,
  )
  const columns = useMemo<Column<CharatersType>[]>(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Avatar',
        accessor: 'image',
        Cell: ({ cell: { value } }) => <Avatar size={'2xl'} src={value} />,
      },
      {
        Header: 'Nombre',
        accessor: 'name',
      },
      {
        Header: 'Genero',
        accessor: 'gender',
      },
      {
        Header: 'Especie',
        accessor: 'species',
      },
      {
        Header: 'Estado',
        accessor: 'status',
      },
    ],
    [],
  )

  return (
    <>
      <Flex mb="1rem">
        <Button
          onClick={() => {
            refetch()
          }}>
          Recargar tabla
        </Button>
      </Flex>
      <Flex mb="2rem">
        <Button
          disabled={!data?.info.prev}
          onClick={() => {
            setPage((prev) => prev - 1)
          }}>
          Atras
        </Button>
        <Button
          disabled={!data?.info.next}
          onClick={() => {
            setPage((prev) => prev + 1)
          }}>
          Siguiente
        </Button>
      </Flex>
      {data && !loading ? (
        <TableData data={data?.results} columns={columns} />
      ) : (
        <LoadingComponent />
      )}
    </>
  )
}

export default Home
