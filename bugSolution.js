```javascript
import { unstable_getServerSession } from "next-auth/next";
import {authOptions} from './auth/[...nextauth]' //Import authOptions

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.status(200).json({ message: 'Authorized', session });
};

export default handler;
```