import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Vendaproduto from './Vendaproduto'
import Cliente from './Cliente'
import Vendedor from './Vendedor'
import Pagamento from './Pagamento'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public valor_total: Number

  @column()
  public data: Date

  @column()
  public clienteId: Number

  @column()
  public vendedorId: Number

  @column()
  public pagamentoId: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vendaproduto)
  public vendaproduto: HasMany<typeof Vendaproduto>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Vendedor)
  public vendedor: BelongsTo<typeof Vendedor>

  @belongsTo(() => Pagamento)
  public pagamento: BelongsTo<typeof Pagamento>
}
