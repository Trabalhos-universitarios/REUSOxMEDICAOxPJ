-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "specialty" INTEGER NOT NULL,
    "email" VARCHAR(50) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
