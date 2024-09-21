import { UnauthorizedException, UsePipes } from "@nestjs/common";
import { Body, Controller, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcryptjs";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipes";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>

@Controller('/questions') 
export class CreateQuestionController {

  constructor(
    private jwt: JwtService,
    private prisma: PrismaService
  ) {}

  @Post()
  // @HttpCode(201)
  // @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async handle(@Body() body: AuthenticateBodySchema) {
    return 'ok'
  } 
}