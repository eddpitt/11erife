import React, { useState } from 'react';
import {
    Button,
    Alert,
    Box,
} from '@mui/material';

const UselessButton = () => {
    const [showAlert, setShowAlert] = useState(false);
    const handleClick = () => {
        setShowAlert(true);
    };
    return <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Button
            variant="contained"
            size="large"
            onTouchStart={handleClick}
            onClick={handleClick}
            sx={{
                fontSize: '1.25rem',
                py: 2,
                px: 6,
                mb: 2,
                borderRadius: 50,
                background: 'linear-gradient(45deg, #6a1b9a 30%, #4a148c 90%)',
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                }
            }}
        >
            Count Me In! 🎉
        </Button>
        {showAlert && (
            <Alert
                severity="info"
                sx={{ mb: 4 }}
            >
                This button does nothing!
            </Alert>
        )}
    </Box>
}

export default UselessButton;