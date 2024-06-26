import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

const SelectBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const order = searchParams.get("order") ?? "desc";
  const sort = searchParams.get("sort") ?? "popular";

  const handleOrderChange = (event: SelectChangeEvent<string>) => {
    const newOrder = event.target.value;
    searchParams.set("order", newOrder);
    setSearchParams(searchParams);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const newSort = event.target.value;
    searchParams.set("sort", newSort);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="sort-order-label" className="mt-[-5px]">
            Sort Order
          </InputLabel>
          <Select
            labelId="sort-order-label"
            value={order}
            onChange={handleOrderChange}
          >
            <MenuItem value="asc">ASC</MenuItem>
            <MenuItem value="desc">DESC</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: "120px" }}>
          <InputLabel id="sort-field-label" className="mt-[-5px]">
            Sort Field
          </InputLabel>
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
      </Box>
    </div>
  );
};

export default SelectBar;
