import { Container, Stack } from '@mui/material';
import { FC } from 'react';

interface MainLayoutProps {
  children: React.ReactNode[];
}

const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps): JSX.Element => {
  const childNodes: React.ReactNode[] = children;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex'
      }}
    >
      <Stack direction="column">
        {childNodes[0]}
        <Stack direction="row">
          {childNodes[1]}
          {childNodes[2]}
        </Stack>
          {childNodes[3]}
      </Stack>
    </Container>
  )
};

export default MainLayout;