
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip
} from '@mui/material';

import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Features() {
  const features = [
    {
      number: '01',
      title: 'Secure Payments',
      description:
        'Protect every transaction with modern security features and reliable payment processing.',
      icon: <SecurityRoundedIcon />,
      color: '#635bff',
      background: '#eeedff',
      tag: 'SECURITY',
    },
    {
      number: '02',
      title: 'Lightning Fast',
      description:
        'Deliver smooth payment experiences with a fast and simple checkout process.',
      icon: <SpeedRoundedIcon />,
      color: '#0891b2',
      background: '#e0f7fa',
      tag: 'PERFORMANCE',
    },
    {
      number: '03',
      title: 'Smart Analytics',
      description:
        'Understand your business performance with clear reports and useful insights.',
      icon: <AnalyticsRoundedIcon />,
      color: '#16a36a',
      background: '#dcfce7',
      tag: 'INSIGHTS',
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">

        {/* Trusted By Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="overline"
            fontWeight="bold"
            color="text.secondary"
            letterSpacing={2}
          >
            BUILT FOR MODERN BUSINESSES
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap={{ xs: 3, md: 7 }}
            sx={{ mt: 4 }}
          >
            {['NEXORA', 'CLOUDIX', 'TECHVERSE', 'DIGIMART'].map((brand) => (
              <Typography
                key={brand}
                variant="h6"
                fontWeight="bold"
                color="#94a3b8"
                letterSpacing={1}
              >
                {brand}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Features Heading */}
        <Box sx={{ maxWidth: 650, mx: 'auto', textAlign: 'center', mb: 7 }}>
          <Chip
            label="WHY PAYFLOW?"
            sx={{
              color: '#635bff',
              backgroundColor: '#eeedff',
              fontWeight: 'bold',
              mb: 2,
            }}
          />

          <Typography
            variant="h3"
            fontWeight="bold"
            color="#0a2540"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '-1.5px',
              mb: 2,
            }}
          >
            Everything Your Business Needs
          </Typography>

          <Typography color="text.secondary" lineHeight={1.8}>
            Powerful tools designed to make payments easier,
            faster and more convenient for your business.
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {features.map((feature) => (
            <Card
              key={feature.number}
              elevation={0}
              sx={{
                border: '1px solid #e8edf3',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-9px)',
                  boxShadow: '0 20px 45px rgba(10,37,64,0.09)',
                  borderColor: feature.color,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 3,
                      backgroundColor: feature.background,
                      color: feature.color,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      '& svg': { fontSize: 32 },
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography color="#cbd5e1" fontWeight="bold">
                    {feature.number}
                  </Typography>
                </Stack>

                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    color: feature.color,
                    fontWeight: 'bold',
                    mt: 4,
                  }}
                >
                  {feature.tag}
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#0a2540"
                  sx={{ my: 1 }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  lineHeight={1.8}
                >
                  {feature.description}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mt: 3, color: feature.color }}
                >
                  <Typography fontWeight="bold" variant="body2">
                    Learn more
                  </Typography>
                  <ArrowForwardRoundedIcon fontSize="small" />
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default Features;
