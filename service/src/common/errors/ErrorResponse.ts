import { ErrorMessage } from "./db-error.message";

interface IErrorResponse {
  error: {
      code: string;
      message?: string;
      details?: Record<string, any>;
  };
}

export function ErrorResponse(errorCode: string, errorMessage: string, errorDetails?: Record<string, any>) {
  const errorResponse = {
      error: {
          code: errorCode,
          message: errorMessage
      }
  };



  return errorResponse;
}

