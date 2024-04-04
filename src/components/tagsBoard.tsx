import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useGetTagsQuery } from '../store/slice/tagsSlice';
import { useSearchParams } from 'react-router-dom';
import { Tag } from '../types/Tag';
import { Loader } from './loader';
import BoardItem from './boardItem';
import { Error } from './error';

const TagsBoard = () => {

  const [searchParams] = useSearchParams()

  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("rowsPerPage") || "5");
  const order = searchParams.get("order") ?? "desc";
  const sort = searchParams.get("sort") ?? "popular";

  const { data: tags, error, isLoading, refetch } = useGetTagsQuery({
    page,
    pageSize,
    order,
    sort,
  });

  useEffect(() => {
    refetch();
  }, [page, pageSize, order, sort, refetch]);

console.log(tags);
  const arrOfSkeleton = [...Array(pageSize || 1)];

  if (error) {
    return (
      <div className="p-5">
        <Error />
      </div>
    )
  }

  return (
    <div>
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
              <Loader index={index} />
            )))
            }

          {tags && !isLoading && (tags.items.map((item: Tag) => (
            <BoardItem item={item}/>
            ))
          )}

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TagsBoard;