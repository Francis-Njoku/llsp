import {MigrationInterface, QueryRunner} from "typeorm";

export class MatchTable1604481470812 implements MigrationInterface {
    name = 'MatchTable1604481470812'

    public async up(_queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "avatarUrl" text, "firstname" character varying(100), "surname" character varying(50), "username" character varying(100), "email" character varying(255), "password" text, "dob" text, "gender" text, "mobile" text, "role" text NOT NULL DEFAULT 'user', "confirmed" boolean NOT NULL DEFAULT false, "forgotPasswordLocked" boolean NOT NULL DEFAULT false, "discordId" text, "gameIds" text array, "country" text, "smsAlert" boolean NOT NULL DEFAULT false, "emailAlert" boolean NOT NULL DEFAULT true, "onboarded" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
