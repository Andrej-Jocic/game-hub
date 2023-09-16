import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const setSearchQuery = useGameQueryStore((store) => store.setSearchQuery);
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current === null) return;
        if (ref.current.value.length === 0) return;
        setSearchQuery(ref.current.value);
        navigate('/');
        ref.current.value = '';
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
