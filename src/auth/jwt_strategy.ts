import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";

import { ExtractJwt, Strategy } from "passport-jwt";
import { Env } from "src/env";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor (config: ConfigService<Env, true>) {
    const publicKey =  config.get('JWT_PUBLIC_KEY', { infer: true })

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }
}

