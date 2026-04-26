import type { Request, Response } from 'express';
import { Status, Switch, Code } from '../../lib/enums.ts';
import { Router } from 'express';
import Client from '../../modules/client.ts';

type PingPayload = {on: Switch; status: Status; code: Code; };

const router: Router = Router();

const ping: PingPayload = { 
  status: Status.ONLINE, 
  on: Switch.ON, 
  code: Code.OK 
};


router.get('/', (req: Request, res: Response) => {
  const client = new Client(req);
  res.json({ping, client});
});

export default router;
