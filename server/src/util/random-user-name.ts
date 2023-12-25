export function generateRandomuserName(length: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result: string = "";
  for (let i = 0; i < length; i++) {
    const index: number = Math.floor(Math.random() * chars.length);
    const char: string = chars[index];
    result += char;
  }
  return result;
}
