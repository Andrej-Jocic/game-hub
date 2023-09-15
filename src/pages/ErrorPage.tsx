import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Box, Heading, Text } from '@chakra-ui/react';

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist"
            : 'An unexpected error has occurred.'}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
