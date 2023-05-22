import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'
import Produto from './Produto'

export default class Vendaproduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public valor: Number

  @column()
  public quantidade: Number

  @column()
  public vendaId: Number

  @column()
  public produtoId: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Venda)
  public venda: BelongsTo<typeof Venda>
  
  @belongsTo(() => Produto)
  public produto: BelongsTo<typeof Produto>
}
