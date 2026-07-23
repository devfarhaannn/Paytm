export const isValidAmount = (
    amount: number
  ) => amount > 0;
  
  export const isValidEmail = (
    email: string
  ) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  export const isRequired = (
    value: string
  ) => value.trim().length > 0;