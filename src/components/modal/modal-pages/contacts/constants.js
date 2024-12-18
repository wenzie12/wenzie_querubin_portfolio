import { z } from 'zod'

// SCHEMA
export const FormSchema = z.object({
  name: z.string({ message: "required"}).nonempty({ message: "Come on, don’t be shy—what should I call you? 😁"}),
  email: z
  .string({ message: "required"})
  .nonempty({ message: "Hey, don't forget your email so we can stay in touch! 😊" })
  .email({ message: "Hmm, I think you forgot the @ symbol... Let's fix that! 👋" }),
  message: z.string({ message: "required"}).min(1, { message: "Don't leave me hanging, tell me what you think! 😉"}),
});

// FORMDATA
export const FORM_DATA = {
  name: "",
  email: "",
  message: "",
}

export const SUBMIT_STATUS = {
  status: 0,
  text: "",
}