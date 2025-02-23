import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateAlterTablePayments1740334494060 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'payments',
            new TableColumn({
                name: 'score',
                type: 'int',
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('payments', 'score');
    }
}
