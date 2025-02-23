import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePayments1740330843108 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'payments', // Nome da tabela
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'date',
                        type: 'timestamp',
                    },
                    {
                        name: 'amount',
                        type: 'decimal',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('payment');
    }
}
