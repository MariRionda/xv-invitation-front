const crypto = require('crypto');



export const encrypted = (name) => {
  const hash = crypto.createHash('md5').update(name).digest('hex').slice(0, 10);
  return hash;
};



export const compare = (firstname, lastname, enc) => {
  return (encrypted(lastname+" "+firstname) === enc);
};






