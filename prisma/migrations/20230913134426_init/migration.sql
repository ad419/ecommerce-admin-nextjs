/*
  Warnings:

  - You are about to drop the column `email` on the `Cupon` table. All the data in the column will be lost.
  - Added the required column `email` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cupon" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "email" TEXT NOT NULL;
