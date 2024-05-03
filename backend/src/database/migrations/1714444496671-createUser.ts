import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1714444496671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "200",
                        isNullable: false
                    },
                    {
                        name: "data_nascimento",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "email",
                        length: "200",
                        type: "varchar",
                    },
                    {
                        name: "endereco",
                        length: "200",
                        type: "varchar",
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
