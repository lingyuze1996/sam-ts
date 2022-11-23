export const greeting = (): String => {
  const msg = process.env.TEST as String;
  return msg;
};
