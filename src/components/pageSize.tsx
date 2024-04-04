import { TablePagination } from '@mui/material';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import constans from '../constants';

type Props = {
  quantity: number,
}

const PageSize: React.FC<Props> = ({ quantity }) => {
  const {
    page: pageNumber,
    pageRows: pageRowsNumber,
    defaultPage,
    defaultPageRows,
    pageRowsAvailable,
  } = constans

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get(pageNumber) || defaultPage)
  const pageSize = parseInt(searchParams.get(pageRowsNumber) || defaultPageRows)

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    const nextPage = newPage + Number(defaultPage);
    searchParams.set("page", nextPage.toString());
    setSearchParams(searchParams);
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value);
    searchParams.set("rowsPerPage", newRowsPerPage.toString());
    setSearchParams(searchParams);
  };

  return (
      <TablePagination
        rowsPerPageOptions={pageRowsAvailable}
        component="div"
        count={quantity}
        rowsPerPage={pageSize}
        page={page - Number(defaultPage)}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
  );
};

export default PageSize;
