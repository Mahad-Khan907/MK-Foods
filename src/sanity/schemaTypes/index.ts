import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chefs from './chefs'
import { clientdata } from './clientdata'
import { report } from './report'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods,chefs,clientdata,report],
}
