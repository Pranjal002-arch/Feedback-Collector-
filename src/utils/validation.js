/**
 * Email validation pattern.
 */
export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: "Enter a valid email",
  },
};