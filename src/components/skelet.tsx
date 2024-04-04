import { Skeleton, TableCell, TableRow } from "@mui/material";

type Props = {
  index: number,
}

const Skelet: React.FC<Props> = ({ index }) => {
    return (
        <TableRow key={index}>
        <TableCell colSpan={2} align="center">
          <Skeleton animation="wave" width={200} height={20} />
        </TableCell>
        <TableCell colSpan={2} align="center">
          <Skeleton animation="wave" width={200} height={20} />
        </TableCell>
      </TableRow>
    )
};

export default Skelet;