import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    dispatch(login({ formData, toast }));
    console.log({ email, password });
    alert("Logged in");
    navigate("/");
    // Handle login logic here
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f0f7ff",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              width: 64,
              height: 64,
              bgcolor: "#0284c7",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
          </Box>

          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 3,
                py: 1.5,
                backgroundColor: "#0284c7",
                "&:hover": {
                  backgroundColor: "#0369a1",
                },
              }}
            >
              Login
            </Button>

            <Box sx={{ textAlign: "center" }}>
              <Link
                href="/register"
                variant="body2"
                sx={{
                  color: "#0284c7",
                  "&:hover": {
                    color: "#0369a1",
                  },
                }}
              >
                New User? Register here
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
