import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const SelectBar = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const order = searchParams.get("order") ?? "desc"
  const sort = searchParams.get("sort") ?? "popular"

  const handleOrderChange = (event: any) => {
    const newOrder = event.target.value as string;
    searchParams.set('order', newOrder);
    setSearchParams(searchParams)
  }

  const handleSortChange = (event: any) => {
    const newSort = event.target.value as string;
    searchParams.set('sort', newSort);
    setSearchParams(searchParams)
  }
  return (
    <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="sort-order-label">Sort Order</InputLabel>
            <Select
            labelId="sort-order-label"
            id="sort-order-select"
            value={order}
            onChange={handleOrderChange}
            >
            <MenuItem value="asc">ASC</MenuItem>
            <MenuItem value="desc">DESC</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: '120px' }}>
            <InputLabel id="sort-field-label">Sort Field</InputLabel>
            <Select
            labelId="sort-field-label"
            id="sort-field-select"
            value={sort}
            onChange={handleSortChange}
            >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="activity">Activity</MenuItem>
            </Select>
        </FormControl>  
    </div>
  );
};

export default SelectBar;