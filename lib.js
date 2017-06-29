'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

const totalPrice =
  (listing, cart) => {
    let prices = []
    for (let item of cart.items) {
      prices.push(listedPrice(listing)(item))
    }
    return prices.reduce((a, b) => a + b)
  }
/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {

      // carts.map((cart) =>
      //     let items = cart.map((cart) => { cart.items })
      //     {cart.customer, total}
      // })
      // let customers = carts.map((cart) => { cart.customer })
      // let items = carts.map((cart) => { cart.items })
      // let prices = items.map((item) => { listedPrice(listings)(item) })
      // return { customer, total: totalPrice(cart) }
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
