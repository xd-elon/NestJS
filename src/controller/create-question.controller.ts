import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";


@Controller('/questions') 
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {

  constructor() {}

  @Post()
  // @HttpCode(201)
  // @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async handle() {
    return 'ok'
  } 
}