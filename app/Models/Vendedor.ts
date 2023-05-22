import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

export default class Vendedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: String

  @column()
  public cnpj: String

  @column()
  public telefone: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Venda)
  public venda: HasMany<typeof Venda>
}
