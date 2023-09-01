/*
  Warnings:

  - A unique constraint covering the columns `[isActive]` on the table `Billboard` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Billboard" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Billboard_isActive_key" ON "Billboard"("isActive");
