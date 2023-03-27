import jwt from 'jsonwebtoken';
import { secretAccess, secretRefresh, expiresAccessTokenAge, expiresRefreshTokenAge } from '../config/authConfig';

interface AuthToken {
  accessToken: string;
  refreshToken: string;
}
type GenerateAccessToken = (id: number, roles: string[]) => AuthToken;

export const generateAccessToken: GenerateAccessToken = (id, roles) => ({
  accessToken: jwt.sign({id, roles}, secretAccess, {expiresIn: `${expiresAccessTokenAge}s`}),
  refreshToken: jwt.sign({id, roles}, secretRefresh, {expiresIn: `${expiresRefreshTokenAge}s`}),
});
