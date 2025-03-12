/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Details` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Details_email_key" ON "Details"("email");
