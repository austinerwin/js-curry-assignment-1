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
  (listings, cart) => {
    let total = 0
    for (let item of cart.items) {
      for (let listing of listings) {
        total += listedPrice(listing)(item)
      }
    }
    return total
  }
/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      return carts.map((cart) => {
        return { customer: cart.customer, total: totalPrice(listings, cart) }
      })
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
