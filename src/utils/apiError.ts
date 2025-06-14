/**
 * Custom error class for handling API-related errors in a standardized way.
 * This class extends the native Error class to provide additional properties
 * that are commonly needed in API error responses.
 */
class ApiError extends Error {
  statusCode: number;
  data: null;
  success: boolean;
  errors: string[];

  /**
   * Creates a new ApiError instance
   */
  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: string[] = [],
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
