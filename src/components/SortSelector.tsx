import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release Date" },
  { value: "metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const currentSortOrder = sortOrders.find(
    (so) => so.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by: " + currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((so) => (
          <MenuItem
            onClick={() => onSelectSortOrder(so.value)}
            key={so.value}
            value={so.value}
          >
            {so.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
