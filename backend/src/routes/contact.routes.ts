import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller';

export const contactRouter = Router();

contactRouter.post('/submit', submitContactForm);
