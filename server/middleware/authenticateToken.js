//секретный ключ токена
const secretKey = 'cZ#tT{m$g2M+LB8&9b6m7{DnQR@fThyJ';

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
    const tokens = token.split('Bearer ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(tokens, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }
  

      console.log(decoded);
      req.user = decoded;
      next();
    });
  };
  