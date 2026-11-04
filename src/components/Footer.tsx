
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Divider
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: '#081c33',
        color: 'white',
        pt: 8,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '2fr 1fr 1fr 1fr',
            },
            gap: 5,
            mb: 7,
          }}
        >

          <Box>
            <Typography variant="h4" fontWeight="bold">
              PayFlow<span style={{ color: '#8b83ff' }}>.</span>
            </Typography>

            <Typography
              sx={{
                color: '#a9b8ca',
                mt: 2,
                maxWidth: 280,
                lineHeight: 1.8,
              }}
            >
              Simplifying digital payments and helping
              businesses grow with modern technology.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 3,
                backgroundColor: '#635bff',
                borderRadius: 2,
              }}
            >
              Get Started
            </Button>
          </Box>

          <Box>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>
              Products
            </Typography>
            {['Payments', 'Billing', 'Checkout', 'Analytics'].map(item => (
              <Typography key={item} sx={linkStyle}>{item}</Typography>
            ))}
          </Box>

          <Box>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>
              Company
            </Typography>
            {['About Us', 'Careers', 'Blog', 'Contact'].map(item => (
              <Typography key={item} sx={linkStyle}>{item}</Typography>
            ))}
          </Box>

          <Box>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>
              Resources
            </Typography>
            {['Documentation', 'Help Center', 'Privacy', 'Terms'].map(item => (
              <Typography key={item} sx={linkStyle}>{item}</Typography>
            ))}
          </Box>

        </Box>

        <Divider sx={{ borderColor: '#263b52', mb: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          spacing={2}
        >
          <Typography variant="body2" color="#a9b8ca">
            © 2026 PayFlow. All rights reserved.
          </Typography>

          <Typography variant="body2" color="#a9b8ca">
            Designed with React and Material UI
          </Typography>
        </Stack>

      </Container>
    </Box>
  );
}

const linkStyle = {
  color: '#a9b8ca',
  mb: 1.5,
  cursor: 'pointer',
  '&:hover': {
    color: '#ffffff',
  },
};

export default Footer;
