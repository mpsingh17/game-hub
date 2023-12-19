import { Input, InputGroup, InputLeftElement, filter } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchInputRef.current) onSearch(searchInputRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchInputRef}
          borderRadius={20}
          placeholder="Search here..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
