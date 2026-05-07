import { Request, Response } from 'express';
import { z } from 'zod';
import { sendEmailNotification } from '../services/email.service';

// SOLID Principle: Input validation is handled strictly before processing
const ContactFormSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  parentEmail: z.string().email("Invalid email address"),
  studentGrade: z.string().min(1, "Student grade level is required"),
  goalsOrConcerns: z.string().min(10, "Please provide some details about goals or concerns"),
});

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const validatedData = ContactFormSchema.parse(req.body);
    
    // SOLID Principle: Delegate the email sending responsibility to a dedicated service
    await sendEmailNotification(validatedData);

    res.status(200).json({ success: true, message: "Inquiry submitted successfully!" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: error.issues });
    } else {
      console.error('Contact Form Error:', error);
      res.status(500).json({ success: false, message: "Internal server error while processing the inquiry." });
    }
  }
};
