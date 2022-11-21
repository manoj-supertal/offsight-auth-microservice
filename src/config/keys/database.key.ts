export const DatabaseKey: {
  type: 'mysql' | 'mariadb';
  host: string;
  port: string | number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
} = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'toor',
  database: 'offsight_local',
  synchronize: false,
};
