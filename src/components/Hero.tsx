
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  Paper,
  Chip
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(120deg, #f6f8ff 0%, #e9eaff 55%, #f4eaff 100%)',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* LEFT SIDE */}
          <Box>
            <Chip
              label="THE FUTURE OF DIGITAL PAYMENTS"
              sx={{
                backgroundColor: '#e1e2ff',
                color: '#635bff',
                fontWeight: 'bold',
                mb: 3,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', md: '4.5rem' },
                fontWeight: 800,
                color: '#0a2540',
                lineHeight: 1.1,
                letterSpacing: '-2px',
                mb: 3,
              }}
            >
              Payments
              <br />
              made
              <Box component="span" sx={{ color: '#635bff' }}>
                {' '}simple.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: '#425466',
                fontSize: '1.15rem',
                lineHeight: 1.8,
                maxWidth: 480,
                mb: 4,
              }}
            >
              A smarter way to manage payments, grow your
              business and deliver amazing customer experiences.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#635bff',
                  borderRadius: 2,
                  px: 3,
                  py: 1.7,
                  '&:hover': {
                    backgroundColor: '#5145e5',
                  },
                }}
              >
                Start Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: '#0a2540',
                  borderColor: '#aab7c4',
                  borderRadius: 2,
                  px: 3,
                }}
              >
                Contact Sales
              </Button>
            </Stack>

            <Typography
              sx={{
                mt: 3,
                color: '#718096',
                fontSize: 13,
              }}
            >
              Simple. Secure. Built for growth.
            </Typography>
          </Box>

          {/* RIGHT SIDE - DASHBOARD */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 4,
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              boxShadow: '0 25px 70px rgba(40, 40, 100, 0.12)',
              transform: { md: 'rotate(1deg)' },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Box>
                <Typography fontWeight="bold" color="#0a2540">
                  Overview
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your business dashboard
                </Typography>
              </Box>

              <Chip label="Live" color="success" size="small" />
            </Stack>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: '#f6f7ff',
                borderRadius: 3,
                mb: 3,
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">
                  Total Revenue
                </Typography>
                <AccountBalanceWalletIcon color="primary" />
              </Stack>

              <Typography
                variant="h3"
                fontWeight="bold"
                color="#0a2540"
                sx={{ mt: 2 }}
              >
                $24,580
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <TrendingUpIcon color="success" />
                <Typography color="success.main" fontWeight="bold">
                  +18.6%
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  this month
                </Typography>
              </Stack>
            </Paper>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography fontWeight="bold" color="#0a2540">
                Recent Payments
              </Typography>
              <Typography color="primary" variant="body2">
                View all
              </Typography>
            </Stack>

            {[
              { name: 'Online Payment', amount: '+$450.00', date: 'Today', icon: 'card' },
              { name: 'Business Transfer', amount: '+$820.00', date: 'Yesterday', icon: 'wallet' },
              { name: 'Customer Payment', amount: '+$290.00', date: 'Yesterday', icon: 'card' },
            ].map((payment, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  py: 2,
                  borderBottom: index !== 2 ? '1px solid #edf0f5' : 'none',
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      backgroundColor: '#eeefff',
                      color: '#635bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {payment.icon === 'card'
                      ? <CreditCardIcon />
                      : <AccountBalanceWalletIcon />}
                  </Box>

                  <Box>
                    <Typography fontWeight="bold" color="#0a2540">
                      {payment.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {payment.date}
                    </Typography>
                  </Box>
                </Stack>

                <Typography fontWeight="bold" color="#16a36a">
                  {payment.amount}
                </Typography>
              </Stack>
            ))}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
