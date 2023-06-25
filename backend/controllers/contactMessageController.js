// IMPORT FILES
import contactMessageModel from "../models/contactMessageModel.js";
import ErrorHandler from "../utils/errorHandler.js";

// CONTACT MESSAGES
export const contactMessageController = async (req, res, next) => {
  const { fullName, email, contact, service, message } = req.body;

  // VALIDATION - FILLING DATA
  if (!fullName) {
    next(new ErrorHandler("Name Is Required", 400));
  }
  if (!email) {
    next(new ErrorHandler("Email Is Required", 400));
  }
  if (!contact) {
    next(new ErrorHandler("Contact Number Is Required", 400));
  }

  // CREATE
  const contactMessage = await contactMessageModel.create({
    fullName,
    email,
    contact,
    service,
    message,
  });

  // SUCCESS
  res.status(201).send({
    success: true,
    message: "Message Send Successfully",
    contactMessage: {
      fullName: contactMessage.fullName,
      email: contactMessage.email,
      contact: contactMessage.contact,
      service: contactMessage.service,
      message: contactMessage.message,
    },
  });
};
