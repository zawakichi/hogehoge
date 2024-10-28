import { Database, Model, DataTypes ,MySQLConnector } from 'https://deno.land/x/denodb/mod.ts';
const connector = new MySQLConnector({
  database: 'hogehoge',
  host: 'host.docker.internal',
  username: 'root',
  password: 'hogehoge',
  port: 3306, // optional
});

const db = new Database(connector);
class Flight extends Model {
  static table = 'flights';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    flightDuration: DataTypes.FLOAT,
  };

  static defaults = {
    flightDuration: 2.5,
  };
}

db.link([Flight]);

await db.sync({ drop: true });

try {
  await Flight.create({
    departure: 'Paris',
    destination: 'Tokyo',
  });
} catch (e: unknown) {
  console.log(e)
}