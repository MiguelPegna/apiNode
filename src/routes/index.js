/*const { Router } = require('express');
const fs = require('fs');

const router = Router();
const PATH_ROUTES = __dirname;

const removeExtention = (filename) => {
    //TODO tracks.js  [name, js]
    const name = filename.split('.').shift();
    return name
}

//Dinamic Router
readdirSync(PATH_ROUTER).filter((filename)=>{
    const justName = removeExtention(filename)
    if(justName !== 'index'){
        import (`./${justName}`).then((moduleRouter) => {
            router.use(`/api/${justName}`, moduleRouter.router)
        })
    }
})

//mal
fs.readdirSync(PATH_ROUTES).filter((filename) =>{
    const name = removeExtention(filename);
    console.log(file);

    if(name != 'index'){
        router.use(`/${name}`, ()=>{
            require(`./${file}`)   
        });
    }
})


module.exports = router;
*/