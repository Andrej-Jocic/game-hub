import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">Dark mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
