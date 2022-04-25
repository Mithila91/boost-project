import { readFileSync, writeFileSync } from 'fs'

export default defineEventHandler(async (event) => {
  const product = await useBody(event)

  const rawdata = readFileSync('server/products.json')
  const products = JSON.parse(rawdata.toString())

  const updateProduct = products.filter((p) => p.id !== product)

  writeFileSync('server/products.json', JSON.stringify(updateProduct))

  return 'deleted'
})
