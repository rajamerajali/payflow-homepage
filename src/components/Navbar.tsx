import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#0a2540',
        borderBottom: '1px solid #e6eaf0',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: '80px',
          }}
        >

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ letterSpacing: '-1.5px' }}
          >
            PayFlow<span style={{ color: '#635bff' }}>.</span>
          </Typography>

          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 4,
            alignItems: 'center'
          }}>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Solutions</Button>
            <Button color="inherit">Developers</Button>
            <Button color="inherit">Resources</Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit">
              Sign In
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                backgroundColor: '#635bff',
                borderRadius: 2,
                px: 2.5,
                '&:hover': {
                  backgroundColor: '#5145e5',
                },
              }}
            >
              Get Started
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;