//arquivo que será executado pra popular nosso banco <3

import prisma from "../src/config/database.js";

async function main() {
  await prisma.tags.createMany({
    skipDuplicates: true,
    data: [
      
        { name:"pessoas",id:1 },
        { name:"vida",id:2 },
        { name:"amigos",id:3 },
      
    ]
  })

  await prisma.mindStates.createMany({
    skipDuplicates: true,
    data: [
      
        {id:1, name:"compaixão"},
        {id:2, name:"alegria"},
        {id:3, name:"gratidao"},
      
    ]
  })


  await prisma.textos.createMany({
    skipDuplicates: true,
    data: [
      
      {id:1,description:"Escrevendo sobre a compaixão.",nameState:"compaixão",tagName:"pessoas",title:"sobre compaixao",date:"2023-01-26T20:08:51.554Z"},
      {id:2,description:"Escrevendo sobre a alegria.",nameState:"alegria",tagName:"vida",title:"sobre alegria",date:"2023-01-26T20:08:51.554Z"},
      {id:3,description:"Escrevendo sobre amigos.",nameState:"gratidao",tagName:"amigos",title:"sobre amigos",date:"2023-01-26T20:08:51.554Z"},
    
    ]
  })
}

main().then(() => {
  console.log("deu muito bom!");
}).catch((e) => {
  console.log(e);
  console.log("deu muito ruim 😢");
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})


//preciso fazer o seed funcionar
//implementar algumas funcoes
//arrumar arquitetura(dps de fazer o drivent)