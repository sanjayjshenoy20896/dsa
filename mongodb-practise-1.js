db.users.insertMany([
  { _id: 1, name: "Sanjay" },
  { _id: 2, name: "Rahul" }
])

db.users.find({})

db.orders.insertMany([
  { _id: 101, userId: 1, amount: 100 },
  { _id: 102, userId: 1, amount: 200 },
  { _id: 103, userId: 2, amount: 300 }  
])
db.orders.find({})
db.users.aggregate([
  {
    $lookup:{
      localField:"_id",
      foreignField:"userId",
      from:"orders",
      as:"orders"
    }
  },
  {
    $unwind:"$orders"
  },
  {
    $group:{
      "_id":"$name",
      "totalAmount":{ $sum: "$orders.amount" },
    }
  },
  {
    $project:{
      "_id":0,
      "name":"$_id",
      "totalAmount":1,
    }
  }
])