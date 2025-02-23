import { DataSource } from 'typeorm';
import { PaymentsEntity } from './entities/payments.entity'; // Exemplo de entidade

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'eventsnest',
    password: 'eventsnest',
    database: 'eventsnest',
    entities: [PaymentsEntity],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
});

export default AppDataSource;
