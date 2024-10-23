import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link as LinkTag,
  Paper,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../redux/features/authSlice";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    // Name validation: min 2 and max 50 characters
    if (formData.name.length < 2 || formData.name.length > 50) {
      newErrors.name = "Name should be between 2 and 50 characters.";
    }

    // Email validation: simple regex for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Password validation: min 6, max 10 chars, at least one special character
    const passwordRegex = /^(?=.*[!@#$%^&*])/;
    if (formData.password.length < 6 || formData.password.length > 10) {
      newErrors.password = "Password should be between 6 and 10 characters.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form (you can send it to your backend here)
      //alert("registered");
      console.log("Form submitted successfully:", formData);
      dispatch(register({ formData, toast }));
    } else {
      console.log("Form validation failed.");
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            Register
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
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
              Register
            </Button>

            <Box sx={{ textAlign: "center" }}>
              <LinkTag
                href="#"
                variant="body2"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "#0284c7",
                  "&:hover": {
                    color: "#0369a1",
                  },
                }}
              >
                Forgot Password?
              </LinkTag>
              <LinkTag
                href="#"
                variant="body2"
                sx={{
                  color: "#0284c7",
                  "&:hover": {
                    color: "#0369a1",
                  },
                }}
              >
                Existing User? Login here
              </LinkTag>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;
