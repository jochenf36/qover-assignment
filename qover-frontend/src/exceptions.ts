// HTTP Status Codes
export const UNAUTHORIZED = 401;

// Error messages
export const GENERAL_ERROR_MESSAGE = 'Something went wrong!';

export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
