import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="h6" gutterBottom>
          Commitment
        </Typography>
        <Typography paragraph>
          <strong>Safiya Khanum</strong> is dedicated to ensuring the privacy and protection of your personal information. We are committed to maintaining the confidentiality and security of your information in accordance with applicable laws and regulations.
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          Personal Information Collection
        </Typography>
        <Typography paragraph>
          We may collect personal information that you provide to us when you use our services, such as your name, email address, phone number, and any other information you choose to provide.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Processing Your Personal Information
        </Typography>
        <Typography paragraph>
          We process your personal information to provide you with our products and services, manage your account, and communicate with you about your transactions or inquiries. We may also use your information for marketing purposes, with your consent where required.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Why Cookies?
        </Typography>
        <Typography paragraph>
          Cookies are small files that are stored on your device to enhance your experience on our website. We use cookies to track your preferences, analyze website usage, and improve our services. You can adjust your browser settings to refuse cookies if you prefer not to have them stored on your device.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Personal Information Security
        </Typography>
        <Typography paragraph>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Deleting Personal Information
        </Typography>
        <Typography paragraph>
          You have the right to request the deletion of your personal information. If you wish to delete your data, please contact us using the details provided below. We will respond to your request in accordance with applicable laws.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Limitation to Liability
        </Typography>
        <Typography paragraph>
          <strong>Safiya Khanum</strong> shall not be liable for any loss or damage resulting from negligence, willful misconduct, acts, or omissions related to your use of our products or services. Under no circumstances shall we be liable for indirect, incidental, consequential, special, or exemplary damages, including but not limited to loss of revenue, anticipated profits, or lost business.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Changes to This Privacy Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and if necessary, we will notify you via email or a notification on our website. Please review this policy periodically to stay informed of any updates.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any requests, questions, comments, or complaints regarding our Privacy Policy or your personal information, please contact our Customer Service:
        </Typography>
        <Typography paragraph>
          <strong>Email:</strong> safiyakhanum73@gmail.com
        </Typography>
        <Typography paragraph>
       
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
