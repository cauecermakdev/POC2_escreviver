https://cauecermak.notion.site/Escreviver-PRISMA-POC-modulo-5-e2721ac51b2a496b86cd38812e34abc8


#compila o schema.prisma e atualiza o db
npx prisma migrate dev 

#atualiza o prismaClient
npx prisma generate

#popula com o @prisma/seed.ts o db
npx prisma db seed

#roda aplicação 
npm run dev

POST: /tags
Body: { "id":4 ,"name": "tag1" }

POST: /mindstates
Body:{
  "id":4,
	"nameState":"mudita"
 }

POST: /textos
Body:
{
    "id": 4,
    "date": "2023-01-26T20:08:51.554Z",
    "title": "sobre existencia",
    "description": "Escrevendo sobre a existencia.",
    "tagName": "tag1",
    "nameState": "mudita"
  }


PUT: /tags
Body:{
  "id":3,
  "name":"mosteiro"
}

GET:/textos
GET:/tags
GET:/mindstates

DELETE:/textos?id=1

UPDATE:/tags
{
  "id":1,
	"name":"newTagName"
 }
