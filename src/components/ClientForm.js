import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography, Container } from '@mui/material';
import { submitClientForm } from '../apiService';
import './ClientForm.css';

const ClientForm = () => {
    const [formData, setFormData] = useState({
        company_name: '',
        company_email: '',
        company_phone_number: '',
        company_website: '',
        type_of_service: '',
        project_description: '',
        competitors: '',
        queries: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitClientForm(formData)
            .then(response => {
                setSubmitted(true);
                setError(null);
            })
            .catch(error => {
                setError('There was an error submitting the form');
                console.error('Error submitting the form:', error);
            });
    };

    return (
        <Container maxWidth="sm">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
                <Typography variant="h6" gutterBottom>Let's work together</Typography>
                
                {submitted && <Typography variant="body1" color="success.main">Form submitted successfully!</Typography>}
                {error && <Typography variant="body1" color="error.main">{error}</Typography>}
                
                <Typography variant="subtitle1" gutterBottom>Basic Information</Typography>
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    label="Company Name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    label="Email Address"
                    name="company_email"
                    type="email"
                    value={formData.company_email}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    label="Phone no."
                    name="company_phone_number"
                    value={formData.company_phone_number}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    label="Website"
                    name="company_website"
                    value={formData.company_website}
                    onChange={handleChange}
                />

                <Typography variant="subtitle1" gutterBottom>Project Details</Typography>
                <TextField
                    select
                    fullWidth
                    required
                    margin="normal"
                    label="Type of service needed"
                    name="type_of_service"
                    value={formData.type_of_service}
                    onChange={handleChange}
                >
                    <MenuItem value="EI">Educational Institute</MenuItem>
                    <MenuItem value="PC">Professional/Corporate</MenuItem>
                    <MenuItem value="OT">Other</MenuItem>
                </TextField>
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    label="Project Description"
                    name="project_description"
                    multiline
                    rows={4}
                    value={formData.project_description}
                    onChange={handleChange}
                />

                <Typography variant="subtitle1" gutterBottom>Additional Information</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Competitors or Benchmark References"
                    name="competitors"
                    multiline
                    rows={2}
                    value={formData.competitors}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    label="Specific Requirements or Questions"
                    name="queries"
                    multiline
                    rows={2}
                    value={formData.queries}
                    onChange={handleChange}
                />

                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default ClientForm;