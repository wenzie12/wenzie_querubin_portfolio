import { z } from 'zod'

// SCHEMA
export const FormSchema = z.object({
  name: z.string({ message: "required"}).nonempty({ message: "must contain at least 1 character(s)"}),
  email: z.string({ message: "required"}).email(),
  message: z.string({ message: "required"}).min(1, { message: "must contain at least 1 character(s)"}),
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