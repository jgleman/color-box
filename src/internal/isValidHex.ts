const HEX_REGEX = /^([a-fA-F0-9]{6}([a-fA-F0-9]{2})?|[a-fA-F0-9]{3}([a-fA-F0-9])?)$/;

export function isValidHex(s: string): boolean {
  return HEX_REGEX.test(s);
}
