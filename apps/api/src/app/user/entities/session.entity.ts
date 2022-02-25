import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ timestamps: true, freezeTableName: true, modelName: 'user_session' })
export class UserSession extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
  })
  sessionId: string;
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  active: boolean;
  @Column({
    type: DataType.STRING,
  })
  deviceId: string;
}
