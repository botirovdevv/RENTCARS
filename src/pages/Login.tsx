import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
  sx={{
    minHeight: '100vh',
    backgroundImage:  `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://as2.ftcdn.net/jpg/03/53/30/95/1000_F_353309534_YCu8lwybhemLz81eoGPKOcM10WYEHq1f.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 2,
  }}
>
      <Card
        sx={{
          maxWidth: 400,
          width: '100%',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'rgba(255,255,255,0.85)',
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            Tizimga kirish
          </Typography>

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            sx={{ borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="Parol"
            variant="outlined"
            margin="normal"
            sx={{ borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Kirish Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              fontSize: '16px',
              mt: 2,
              backgroundColor: '#2193b0',
              color: 'white',
              letterSpacing: '2px',
              textTransform: 'none',
              borderRadius: 2,
              py: 1.2,
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Kirish
          </Button>

          {/* Divider */}
          <Divider sx={{ my: 3 }}>yoki</Divider>

          {/* Social Login */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              mb: 1,
              textTransform: 'none',
              borderRadius: 2,
              py: 1,
              fontWeight: 500,
              ':hover': {
                backgroundColor: '#f1f1f1',
              },
            }}
            href="#google-auth"
          >
            Google orqali kirish
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              py: 1,
              fontWeight: 500,
              ':hover': {
                backgroundColor: '#f1f1f1',
              },
            }}
            href="#github-auth"
          >
            GitHub orqali kirish
          </Button>

          {/* Register Link */}
          <Typography variant="body2" align="center" mt={3}>
            Akkountingiz yo‘qmi?{' '}
            <a href="/register" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: '500' }}>
              Ro‘yxatdan o‘tish
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
