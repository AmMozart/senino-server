import cookie from 'cookie';

import { expiresRefreshTokenAge } from '../config/authConfig';
import { users } from '../models/User';
import { generateAccessToken } from '../utils/generateAccessToken';

interface ReqBody {
  username: string;
  password: string;
}

class AuthController {
  async login(req: any, res: any) {
    try {
      const {username, password} = req.body as ReqBody;
      const user = users.find(val => val.username === username);

      if(!user) {
        return res.status(400).json({message: 'Пользователя с таким именем не найдено'});
      }

      const isCorrectPassword = user.password === password;

      if(!isCorrectPassword) {
        return res.status(400).json({message: 'Неверный пароль'}); 
      }

      const {accessToken, refreshToken} = generateAccessToken(user.id, user.roles);

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: expiresRefreshTokenAge,
        }));

      return res.json({accessToken});
    }
    catch(e) {
      if(e instanceof Error) {
        console.log(e.message);
        res.status(400).json({message: 'Ошибка входа'});
      }
    }
  }

  async logout(req: any, res: any) {
    try{
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('refreshToken', '', {
          httpOnly: true,
          maxAge: 0,
        }));

      return res.sendStatus(200);
    }
    catch(e) {
      if(e instanceof Error) {
        console.log(e.message);
        res.status(400).json({message: 'Ошибка выхода'});
      }
    }
  }
}

export default new AuthController();
