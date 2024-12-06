const StripeErrorCodes = {
    400: "Bad Request: The request was unacceptable, often due to missing a required parameter.",
    401: "Unauthorized: No valid API key provided.",
    402: "Request Failed: The parameters were valid but the request failed.",
    403: "Forbidden: The API key doesn't have permissions to perform the request.",
    404: "Not Found: The requested resource doesn't exist.",
    409: "Conflict: The request conflicts with another request.",
    429: "Too Many Requests: Too many requests hit the API too quickly.",
    500: "Server Error: Something went wrong on Stripe's end.",
    502: "Server Error: Something went wrong on Stripe's end.",
    503: "Server Error: Something went wrong on Stripe's end.",
    504: "Server Error: Something went wrong on Stripe's end.",
};

type StripeErrorCodes = typeof StripeErrorCodes;

interface StripeError extends Error {
    statusCode: keyof StripeErrorCodes;
}

interface StripeErrorResponse {
    status: keyof StripeErrorCodes;
    message: StripeErrorCodes[keyof StripeErrorCodes];
    rawError: StripeError;
}

function handleStripeError(error: StripeError): StripeErrorResponse {
    const errorMessage =
        StripeErrorCodes[error.statusCode] ||
        "Unknown Error: An unexpected error occurred.";
    throw {
        status: error.statusCode,
        message: errorMessage,
        rawError: error,
    };
}

export { handleStripeError };