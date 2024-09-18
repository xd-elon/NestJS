import { ConflictException, UnauthorizedException, UsePipes } from "@nestjs/common";
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcryptjs";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipes";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>

@Controller('/sessions') 
export class AuthenticateController {
  prisma: any;
  constructor(private jwt: JwtService) {}

  @Post()
  // @HttpCode(201)
  @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async handle(@Body() body: AuthenticateBodySchema) {
    const { email, password } =  body
    const user = await this.prisma.user.findUnique({ where: { email }})
    if (!user) {
      throw new UnauthorizedException("User credentials do not match")
    }
    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException("User credentials do not match")
    }
    const acessToken = this.jwt.sign({ sub: user.id })

    return {
      acess_token: acessToken}
  } 
}