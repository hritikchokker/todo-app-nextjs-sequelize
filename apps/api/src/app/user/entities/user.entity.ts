import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table
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
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  })
  email: string;
  @Column({
    type: DataType.DATE,
    set() {
      this.setDataValue('createdAt', new Date().toISOString());
    },
  })
  createdAt?: Date | string;
  @Column({
    type: DataType.DATE,
    set() {
      this.setDataValue('updatedAt', new Date().toISOString());
    },
  })
  updatedAt?: Date | string;
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
}
