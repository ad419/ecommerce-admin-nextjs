/*
  Warnings:

  - Added the required column `email` to the `Cupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cupon" ADD COLUMN     "email" TEXT NOT NULL;
