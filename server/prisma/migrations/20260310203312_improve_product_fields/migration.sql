/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `specs` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('BOARD', 'BINDING', 'BOOT', 'GEAR');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image",
DROP COLUMN "specs",
ADD COLUMN     "attributes" JSONB,
ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "oldPrice" INTEGER,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
