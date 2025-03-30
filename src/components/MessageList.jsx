import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';

function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
          const response = await axios
            .get('https://hstmrzdn72.execute-api.us-east-2.amazonaws.com/dev/messages', {
              headers: {
                'Content-Type': 'application/json', 
              },
            });
          setMessages(response.data);
        };

        fetchMessages();
    }, []);

    return (
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            Messages
        </Typography>
        <Grid container spacing={2}>
            {messages.map((msg) => (
                <Grid item xs={12} key={msg.messageId}>
                    <Card elevation={3} sx={{ borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h6" color="primary">
                                {msg.name}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> {msg.email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Message:</strong> {msg.message}
                            </Typography>
                            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                <strong>Timestamp:</strong> {msg.timestamp}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </Container>
    );
}

export default MessageList;
