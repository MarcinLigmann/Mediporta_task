import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useGetTagsQuery } from '../store/slice/tagsSlice';
import { useSearchParams } from 'react-router-dom';
import { Tag } from '../types/Tag';
import Skelet from './skelet';
import BoardItem from './boardItem';
import Error from './error';
import constans from '../constants';

type Props = {
  setQuantity: (x: number) => void,
}

const TagsBoard: React.FC<Props> = ({ setQuantity }) => {
  const {
    page: pageNumber,
    pageRows: pageRowsNumber,
    order: orderName,
    sort: sortName,
    defaultPage,
    defaultPageRows,
    defaultOrder,
    defaultSort
  } = constans

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get(pageNumber) || defaultPage);
  const pageSize = parseInt(searchParams.get(pageRowsNumber) || defaultPageRows);
  const order = searchParams.get(orderName) ?? defaultOrder;
  const sort = searchParams.get(sortName) ?? defaultSort;

  const { data: tags, error, isLoading, refetch } = useGetTagsQuery({
    page,
    pageSize,
    order,
    sort,
  });

  if (tags) {
    setQuantity(tags.quota_max);
  }

  useEffect(() => {
    refetch();
  }, [page, pageSize, order, sort, refetch]);

  const arrOfSkeleton = [...Array(pageSize || defaultPageRows)];

  if (error) {
    return (
      <div className="p-5">
        <Error />
      </div>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && (
            arrOfSkeleton.map((_, index) => (
              <Skelet index={index} />
            )))
            }

          {tags && !isLoading && (tags.items.map((item: Tag) => (
            <BoardItem item={item}/>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagsBoard;