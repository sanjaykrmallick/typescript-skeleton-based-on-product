import { AxiosError } from "axios";

export const handleApiError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    switch (status) {
      case 400:
        return `Bad Request: ${message}`;
      case 401:
        return "Unauthorized: Please log in.";
      case 403:
        return "Forbidden: You don’t have access.";
      case 404:
        return "Not Found.";
      case 500:
        return "Server Error. Please try again later.";
      default:
        return message;
    }
  }

  return "An unexpected error occurred.";
};
