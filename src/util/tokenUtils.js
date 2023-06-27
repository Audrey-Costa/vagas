export function parseJwt (token) {
  const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

  return payload;
};