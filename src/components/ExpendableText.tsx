import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

type Props = {
  children: string;
};

const LIMIT = 300;

function ExpendableText({ children }: Props) {
  const [expended, setExpended] = useState(false);

  if (!children) return null;

  if (children.length <= LIMIT) return <Text>{children}</Text>;

  const summary = expended ? children : children.substring(0, LIMIT) + '...';

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpended((e) => !e)}
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
      >
        {expended ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
}

export default ExpendableText;
