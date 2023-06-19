const secretKey = 'cZ#tT{m$g2M+LB8&9b6m7{DnQR@fThyJ';

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }
  

      req.user = decoded;
      next();
    });
  };
  