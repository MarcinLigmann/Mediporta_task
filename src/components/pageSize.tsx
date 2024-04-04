import { TablePagination } from '@mui/material';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

type Props = {
  quantity: number,
}

const PageSize: React.FC<Props> = ({ quantity }) => {
  // const PageSize = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get("page") || "1")
  const pageSize = parseInt(searchParams.get("rowsPerPage") || "5")

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {

    const nextPage = newPage + 1;
    searchParams.set('page', nextPage.toString());
    setSearchParams(searchParams);
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    searchParams.set('rowsPerPage', newRowsPerPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={quantity}
        // count={300}
        rowsPerPage={pageSize}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PageSize;
