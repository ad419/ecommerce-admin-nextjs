/*
  Warnings:

  - You are about to drop the column `claimedById` on the `Cupon` table. All the data in the column will be lost.
  - Added the required column `storeId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cupon" DROP COLUMN "claimedById";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "storeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserToCupon" (
    "userId" TEXT NOT NULL,
    "cuponId" TEXT NOT NULL,

    CONSTRAINT "UserToCupon_pkey" PRIMARY KEY ("userId","cuponId")
);

-- CreateIndex
CREATE INDEX "User_storeId_idx" ON "User"("storeId");
