/*
  Warnings:

  - You are about to drop the `MindStates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Textos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Textos" DROP CONSTRAINT "Textos_nameState_fkey";

-- DropForeignKey
ALTER TABLE "Textos" DROP CONSTRAINT "Textos_tagName_fkey";

-- DropTable
DROP TABLE "MindStates";

-- DropTable
DROP TABLE "Tags";

-- DropTable
DROP TABLE "Textos";

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mindStates" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "mindStates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "textos" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,
    "nameState" TEXT NOT NULL,

    CONSTRAINT "textos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "mindStates_name_key" ON "mindStates"("name");

-- AddForeignKey
ALTER TABLE "textos" ADD CONSTRAINT "textos_tagName_fkey" FOREIGN KEY ("tagName") REFERENCES "tags"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "textos" ADD CONSTRAINT "textos_nameState_fkey" FOREIGN KEY ("nameState") REFERENCES "mindStates"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
