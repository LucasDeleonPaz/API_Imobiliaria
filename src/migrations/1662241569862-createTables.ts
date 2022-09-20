import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1662241569862 implements MigrationInterface {
    name = 'createTables1662241569862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c76ec0518e6ad7cce0fd64c25c4"`);
        await queryRunner.query(`ALTER TABLE "Properties" RENAME COLUMN "categories" TO "category"`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_3854f507d6e084611bb3c04c05f" FOREIGN KEY ("category") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_3854f507d6e084611bb3c04c05f"`);
        await queryRunner.query(`ALTER TABLE "Properties" RENAME COLUMN "category" TO "categories"`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c76ec0518e6ad7cce0fd64c25c4" FOREIGN KEY ("categories") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
