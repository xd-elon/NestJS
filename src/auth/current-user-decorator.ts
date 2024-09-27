import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { UserPayload } from "./jwt_strategy";

export const currentUser = createParamDecorator((_:never,  context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest()

  return request.user as UserPayload
});