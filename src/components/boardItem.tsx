import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Tag } from '../types/Tag';

type Props = {
  item: Tag
}

const BoardItem: React.FC<Props> = ({ item }) => {
  return (
    <TableRow key={item.name}>
    <TableCell>{item.name}</TableCell>
    <TableCell>{item.count}</TableCell>
  </TableRow>
  );
};

export default BoardItem;