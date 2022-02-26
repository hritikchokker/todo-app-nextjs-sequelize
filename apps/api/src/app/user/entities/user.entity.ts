import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { HashingService } from '../../shared/services/hashing/hashing.service';

const hash = new HashingService();
@Table({ timestamps: true, modelName: 'user' })
export class User extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      min: 4,
      max: 50,
    },
  })
  firstName: string;
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      min: 4,
      max: 50,
    },
  })
  lastName: string;
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  uid: string;
  @Column({
    type: DataType.TEXT,
    set(value) {
      // Storing passwords in plaintext in the database is terrible.
      // Hashing the value with an appropriate cryptographic hash function is better.
      this.setDataValue('password', hash.createHash(value as string));
    },
  })
  password: string;
  @Column({
    type: DataType.TEXT,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  })
  email: string;
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
