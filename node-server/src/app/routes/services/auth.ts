import type { Request, Response } from 'express';
import { Router } from 'express';
import users from '../../data/users.ts'
import User from '../../models/user.ts';
const router = Router();

router.post('/', (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;  
  users.forEach((user: User) => {
    if (email == user.email) {
      if (password == user.password) {
        res.locals.user = user;
        res.locals.userId = user.id;
        res.status(200).json(user);
      } else {
        res.json({error: "Incorrect password"})
      }
    }
  }
});

export default router;
