-- CreateTable
CREATE TABLE "ProgramLikes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "program_id" INTEGER NOT NULL,
    "user_id" INTEGER,

    FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChannelLikes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "channel_id" INTEGER NOT NULL,
    "user_id" INTEGER,

    FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
