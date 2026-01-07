
db.orders.insertMany([
   { _id: 1, userId: 101, amount: 100, status: "completed" },
  { _id: 2, userId: 101, amount: 200, status: "pending" },
  { _id: 3, userId: 102, amount: 300, status: "completed" },
  { _id: 4, userId: 101, amount: 150, status: "completed" }
]);

db.orders.find({userId:101,status:"completed"});

db.orders.aggregate([
  {
    $group:{
      "_id":"$userId",
      "totalAmount":{$sum:"$amount"}
    }
  },
  ])
  
  
  db.orders.aggregate([
  {
    $group:{
      "_id":"$userId",
      "totalAmount":{$sum:"$amount"}
    }
  },
  {
    $match:{
      totalAmount:{
        $gt:300
      }
    }
  }
  ])
  
  
  db.orders.aggregate([
  {
    $group:{
      "_id":"$userId",
      "totalAmount":{$sum:"$amount"},
      "orderCount":{$sum:1}
    },
  },
  {
    $project:{
      "_id":0,
      "userId":"$_id",
      "totalAmount":1,
      "orderCount":1
    }
  }
  
  ])


db.orders.aggregate([
  {
    $group:{
      "_id":"$userId",
      "totalAmount":{$sum:"$amount"},
      "orderCount":{$sum:1}
    },
  },
  {
    $match:{
      orderCount:{$gt:2}
    }
  },
  {
    $project:{
      "_id":0,
      "userId":"$_id",
      "orderCount":1
    }
  }
  
  ])
  db.orders.aggregate([
  {
    $group:{
      "_id":"$userId",
      "totalAmount":{$sum:"$amount"},
      "orderCount":{$sum:1}
    },
  },
  {
    $sort:{
      totalAmount:-1
    }
  },
  {
    $limit:2
  },
  {
    $project:{
      "_id":0,
      "userId":"$_id",
      "totalAmount":1
    }
  }
  
  ])
