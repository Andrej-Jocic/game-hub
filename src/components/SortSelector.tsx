import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

type Props = {
  onSelectSortOrder: (sortOrder: string | null) => void;
  selectedSortOrder: string | null;
};

function SortSelector({ onSelectSortOrder, selectedSortOrder }: Props) {
  // - hypen reverse the sort order
  const sortOrders = [
    { value: null, label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Relese data' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{' '}
        {currentSortOrder?.value ? currentSortOrder.label : 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value ?? 'relevance'}
            value={order.value ?? 'relevance'}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
