-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "profile_img" TEXT NOT NULL DEFAULT 'https://ybsgxbwroouqabsywdht.supabase.co/storage/v1/object/sign/default_sys/def.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZWZhdWx0X3N5cy9kZWYucG5nIiwiaWF0IjoxNzA3ODEwMjIzLCJleHAiOjE3MzkzNDYyMjN9.4OImGPC5J6mTWFDWwssl8Y09ySLyO0O3Lj-euWvU9H4&t=2024-02-13T07%3A43%3A44.593Z',
    "city" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
