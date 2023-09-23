import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class DataUsers1695436363116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table(
                {
                    name: "user",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                            isUnique: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "specialty",
                            type: "integer",
                        },
                        {
                            name: "email",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("user");
    }

}
