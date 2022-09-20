import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1662213776854 implements MigrationInterface {
    name = 'createTables1662213776854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_9034683839599c80ebe9ebb0891" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Schedules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_364f08c10e5a443bf4a2125e702" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "size" integer NOT NULL, "sold" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "address" uuid, "categories" uuid, CONSTRAINT "UQ_1f16f593f1b28b7972a20b23696" UNIQUE ("size"), CONSTRAINT "REL_0a88ce9cb918871c22aed51119" UNIQUE ("address"), CONSTRAINT "PK_0840069eb699a18f3ad6e829ae8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_01d0fb5491aa9827b09e87045bc" FOREIGN KEY ("propertyId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_0a88ce9cb918871c22aed511191" FOREIGN KEY ("address") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c76ec0518e6ad7cce0fd64c25c4" FOREIGN KEY ("categories") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c76ec0518e6ad7cce0fd64c25c4"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_0a88ce9cb918871c22aed511191"`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3"`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_01d0fb5491aa9827b09e87045bc"`);
        await queryRunner.query(`DROP TABLE "Properties"`);
        await queryRunner.query(`DROP TABLE "Schedules"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
        await queryRunner.query(`DROP TABLE "Address"`);
    }

}
