import { Column, DataType, Model, Table } from 'sequelize-typescript';
@Table({ timestamps: true, modelName: 'todo' })
export class Todo extends Model {
  @Column({
    type: DataType.TEXT,
    validate: {
      min: 4,
      max: 2000,
    },
    allowNull: false,
  })
  task: string;
  @Column({
    type: DataType.TEXT,
    validate: {
      min: 4,
      max: 80,
    },
    allowNull: false,
  })
  creator: string;
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  taskId: string;
  @Column({
    type: DataType.BOOLEAN,
  })
  isImmediate: boolean;
}
