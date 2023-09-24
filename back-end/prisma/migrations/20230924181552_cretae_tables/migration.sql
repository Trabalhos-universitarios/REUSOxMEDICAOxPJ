/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[specialty_id,specialty_name]` on the table `specialty` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "specialty_specialty_id_key";

-- DropIndex
DROP INDEX "specialty_specialty_name_key";

-- AlterTable
ALTER TABLE "specialty" ALTER COLUMN "specialty_id" DROP DEFAULT,
ALTER COLUMN "specialty_name" SET DATA TYPE TEXT;
DROP SEQUENCE "specialty_specialty_id_seq";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Specialty" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "graphical_resources" (
    "resource_key" INTEGER NOT NULL,
    "resource" TEXT NOT NULL,
    "resource_module" INTEGER NOT NULL,

    CONSTRAINT "graphical_resources_pkey" PRIMARY KEY ("resource_key")
);

-- CreateTable
CREATE TABLE "modules" (
    "module_ID" INTEGER NOT NULL,
    "module_name" TEXT NOT NULL,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("module_ID")
);

-- CreateTable
CREATE TABLE "user_modules_purchases" (
    "purchase_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "module_id" INTEGER NOT NULL,

    CONSTRAINT "user_modules_purchases_pkey" PRIMARY KEY ("purchase_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "modules_module_name_key" ON "modules"("module_name");

-- CreateIndex
CREATE UNIQUE INDEX "specialty_specialty_id_specialty_name_key" ON "specialty"("specialty_id", "specialty_name");

-- AddForeignKey
ALTER TABLE "graphical_resources" ADD CONSTRAINT "graphical_resources_resource_module_fkey" FOREIGN KEY ("resource_module") REFERENCES "modules"("module_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_modules_purchases" ADD CONSTRAINT "user_modules_purchases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_modules_purchases" ADD CONSTRAINT "user_modules_purchases_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("module_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
