const {PrismaClient}=require("@prisma/client");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var password=bcrypt.hashSync("password", saltRounds)
const datas = require('./data.json');
let prisma=new PrismaClient();
var promises=[]
datas.forEach((ele)=>{
    promises.push(prisma.user.create({data:{name:ele.name,email:ele.email,password:password,role:{connect:{name:"Client"}}}}))
}) 
async function generate(){
    await Promise.all(promises);
}
generate();