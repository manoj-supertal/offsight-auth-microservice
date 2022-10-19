import { DataSource } from 'typeorm';
import { DatabaseKey } from "../keys/database.key";
import { UserEntity } from "../../model/User/user.entity";


 const TypeOrmConfig: DataSource = new DataSource({
  type: DatabaseKey.type,
  host: DatabaseKey.host,
  port: (typeof (DatabaseKey.port)== "string" ) ? parseInt(DatabaseKey.port,10):DatabaseKey.port,
  username: DatabaseKey.username,
  password: DatabaseKey.password,
  database: DatabaseKey.database,
  entities: [
    UserEntity
  ],
  synchronize: DatabaseKey.synchronize,
});

TypeOrmConfig
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  })

export default TypeOrmConfig;