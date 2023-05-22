import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Fornecedore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cnpj: String

  @column()
  public nome: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Produto)
  public produto: HasMany<typeof Produto>
}
