import { FC } from 'react';
import Header from './layout/Header';
import LeftNavigation from './layout/LeftNavigation';
import MainContent from './layout/MainContent';
import Footer from './layout/Footer';
import { Box, Container, Stack } from '@mui/material';

const App: FC = (): JSX.Element => {
  return (
    <Box sx={{
      display: 'flex'
    }}
    >
      <LeftNavigation />
      <Container
        maxWidth={false}
        disableGutters
        sx = {{
          flexGrow: 1
        }}
      >
        <Stack direction="column">
          <Header />
          <MainContent />
          <Footer />
        </Stack>
      </Container>
    </Box>
  )
};

export default App;