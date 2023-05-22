import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'
import Fornecedore from './Fornecedore'
import Vendaproduto from './Vendaproduto'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: String

  @column()
  public preco: Number

  @column()
  public categoriaId: Number

  @column()
  public fornecedoreId: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @hasMany(() => Vendaproduto)
  public vendaproduto: HasMany<typeof Vendaproduto>
  
  @belongsTo(() => Categoria)
  public categoria: BelongsTo<typeof Categoria>
  
  @belongsTo(() => Fornecedore)
  public fornecedore: BelongsTo<typeof Fornecedore>

}
