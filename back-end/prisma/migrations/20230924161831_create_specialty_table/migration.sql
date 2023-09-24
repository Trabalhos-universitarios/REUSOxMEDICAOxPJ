-- CreateTable
CREATE TABLE "specialty" (
    "specialty_id" SERIAL NOT NULL,
    "specialty_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "specialty_pkey" PRIMARY KEY ("specialty_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialty_specialty_id_key" ON "specialty"("specialty_id");

-- CreateIndex
CREATE UNIQUE INDEX "specialty_specialty_name_key" ON "specialty"("specialty_name");
