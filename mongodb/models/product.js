const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id;
  }

  save() {
    const db = getDb();
    let dbOps;
    if (this._id) {
      dbOps = db.collection('products').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    }
    else {
      dbOps = db.collection('products').insertOne(this)
    }
    return dbOps
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db.collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

  // static updateById(prodId, ttle, prce, imgUrl, desc) {
  // const db = getDb();
  // return db.collection('products')
  // .update({ _id: new mongodb.ObjectId(prodId) },
  // { $set: { title: ttle, price: prce, imageUrl: imgUrl, description: desc } })
  // .then(product => {
  // console.log(product);
  // return product;
  // })
  // .catch(err => {
  // console.log(err)
  // });
  // }

  static destroy(prodId) {
    const db = getDb();
    return db.collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err)
      });
  }
}


module.exports = Product;
