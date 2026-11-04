
import {
  Box,
  Container,
  Typography,
  Stack
} from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaymentsIcon from '@mui/icons-material/Payments';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Statistics() {
  const stats = [
    {
      value: '$2.5M+',
      label: 'Total Payments',
      icon: <PaymentsIcon />,
    },
    {
      value: '120K+',
      label: 'Transactions',
      icon: <TrendingUpIcon />,
    },
    {
      value: '99.9%',
      label: 'Reliability',
      icon: <VerifiedIcon />,
    },
    {
      value: '24/7',
      label: 'Customer Support',
      icon: <SupportAgentIcon />,
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(120deg, #0a2540, #1e1b4b)',
        py: { xs: 7, md: 9 },
      }}
    >
      <Container maxWidth="lg">

        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: '#a5b4fc', fontWeight: 'bold', letterSpacing: 2 }}
          >
            PAYFLOW IN NUMBERS
          </Typography>

         <Typography
  variant="h3"
  color="white"
  sx={{
    mt: 2,
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 'bold',
  }}
>
  Built for Better Business
</Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {stats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                textAlign: 'center',
                p: 3,
                borderRight: { md: '1px solid #334155' },
              }}
            >
              <Box sx={{ color: '#a5b4fc', mb: 2 }}>
                {stat.icon}
              </Box>

             <Typography
  variant="h3"
  color="white"
  sx={{ fontWeight: 'bold' }}
>
  {stat.value}
</Typography>

              <Typography
                color="#cbd5e1"
                sx={{ mt: 1 }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default Statistics;
