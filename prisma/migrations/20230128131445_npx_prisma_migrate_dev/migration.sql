/*
  Warnings:

  - You are about to drop the `cars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cars";

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MindStates" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MindStates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Textos" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,
    "nameState" TEXT NOT NULL,

    CONSTRAINT "Textos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_name_key" ON "Tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MindStates_name_key" ON "MindStates"("name");

-- AddForeignKey
ALTER TABLE "Textos" ADD CONSTRAINT "Textos_tagName_fkey" FOREIGN KEY ("tagName") REFERENCES "Tags"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Textos" ADD CONSTRAINT "Textos_nameState_fkey" FOREIGN KEY ("nameState") REFERENCES "MindStates"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
