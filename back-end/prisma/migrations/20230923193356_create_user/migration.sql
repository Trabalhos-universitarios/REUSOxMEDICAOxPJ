/*
  Warnings:

  - You are about to drop the `specialty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "specialty";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "specialty" INTEGER NOT NULL,
    "email" VARCHAR(50) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
