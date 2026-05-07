import nodemailer from 'nodemailer';

export const sendEmailNotification = async (data: { parentName: string, parentEmail: string, studentGrade: string, goalsOrConcerns: string }) => {
  // In a real application, you would configure SMTP settings via Environment Variables
  // For this mock implementation, we log the details.
  console.log('--- Mock Email Sending ---');
  console.log(`To: Kalida Corner Admin`);
  console.log(`Subject: New Tutoring Inquiry from ${data.parentName}`);
  console.log(`Parent Name: ${data.parentName}`);
  console.log(`Parent Email: ${data.parentEmail}`);
  console.log(`Student Grade: ${data.studentGrade}`);
  console.log(`Goals/Concerns: ${data.goalsOrConcerns}`);
  console.log('--------------------------');

  /* Real Implementation Example:
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Kalida Corner Website" <noreply@kalidacorner.com>',
    to: 'your-email@kalidacorner.com',
    subject: `New Inquiry from ${data.parentName}`,
    text: `Grade: ${data.studentGrade}\nGoals: ${data.goalsOrConcerns}\nEmail: ${data.parentEmail}`
  });
  */
  
  // Return true to simulate successful send
  return true;
};
