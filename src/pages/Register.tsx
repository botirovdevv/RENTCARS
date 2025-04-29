import React, { useState } from 'react';
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
import { Visibility, VisibilityOff, Email, Lock, Person } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:  `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://as2.ftcdn.net/jpg/03/53/30/95/1000_F_353309534_YCu8lwybhemLz81eoGPKOcM10WYEHq1f.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.2)',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          p: 2,
        }}
      >
        <Card sx={{ maxWidth: 450, width: '100%', borderRadius: 4, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Ro‘yxatdan o‘tish
            </Typography>

            <TextField
              fullWidth
              label="Ismingiz"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              label="Parol"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              type={showConfirmPassword ? 'text' : 'password'}
              label="Parolni tasdiqlang"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirmPassword((prev) => !prev)}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#2193b0',
                ':hover': {
                  backgroundColor: '#1976d2',
                },
                borderRadius: 2
              }}
            >
              Ro‘yxatdan o‘tish
            </Button>

            <Typography variant="body2" align="center" mt={2}>
              Akkountingiz bormi? <a href="/login">Kirish</a>
            </Typography>

            <Divider sx={{ my: 2 }}>yoki</Divider>

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
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Register;
