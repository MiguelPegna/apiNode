const bcrypt = require("bcrypt");
const controlPass ={};

controlPass.encrypt= async(passPlain) => {
    const password = passPlain;
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

controlPass.compare= async(passPlain, passDB) => {
    return await bcrypt.compare(passPlain, passDB);
}

module.exports = controlPass;