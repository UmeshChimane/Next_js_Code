import { ZodError } from "zod";

type RouteHandler = (
  request: Request
) => Promise<Response>;

export function withErrorHandler(handler: RouteHandler) {
  return async (request: Request): Promise<Response> => {
    try {
      return await handler(request);
    } catch (error) {
      console.error("API Error:", error);

      if (error instanceof ZodError) {
        return Response.json(
          {
            success: false,
            message: "Validation failed",
            errors: error.issues,
          },
          { status: 400 }
        );
      }

      return Response.json(
        {
          success: false,
          message: "Internal server error",
        },
        { status: 500 }
      );
    }
  };
}