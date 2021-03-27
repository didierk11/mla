const express = require('express')
const app = express()
const https = require('https')
const port = 3000

let itemDescription
const root = 'https://api.mercadolibre.com/'

app.get('/api/items', function (req, res) {
  https.get(root + 'sites/MLA/search?q=' + req.query.q, (result) => {
    let data = ''
    console.log('params' + JSON.stringify(req.query))
    result.on('data', (d) => {
      data += d
    })
    result.on('end', () => {
      const obj = JSON.parse(data)
      obj.results.length = 4
      const array = obj.results
      const items = []
      const filters = obj.filters
      // const availableFilters = obj.available_filters
      let array2
      let array3
      const categories = []
      if (filters.length === 0) {
        array2 = obj.available_filters
      } else {
        array2 = obj.filters
      }
      array2.forEach((element) => {
        console.log(element.id)
        if (element.id === 'category') {
          array3 = element.values
        }
      })
      array3.forEach((element) => {
        categories.push(element.name)
      })
      array.forEach((element) => {
        const itemId = element.id
        const itemTitle = element.title
        const price = element.price.toString().split('.')
        const itemPrice = isNaN(parseInt(price[0])) ? 0 : parseInt(price[0])
        const itemDecimal = isNaN(parseInt(price[1])) ? 0 : parseInt(price[1])

        console.log(element.price)

        const itemCurrency = element.currency_id
        const itemCondition = element.condition
        const itemPicture = element.thumbnail
        const itemFreeShipping = element.shipping.free_shipping

        items.push({
          id: itemId,
          title: itemTitle,
          price: {
            currency: itemCurrency,
            amount: itemPrice,
            decimals: itemDecimal
          },
          picture: itemPicture,
          condition: itemCondition,
          free_shipping: itemFreeShipping
        })
      })
      const o = {
        author: {
          name: 'Didier',
          lastname: 'Merino'
        },
        categories: categories,
        items: items
      }
      res.send(o)
    })
    result.on('error', (e) => {
      console.log(e)
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
