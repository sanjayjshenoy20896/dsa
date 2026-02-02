db.products.insertMany([
  {_id:1, name: "Laptop", category: "Electronics" },
  { _id:2,name: "Mobile", category: "Electronics" },
  { _id:3,name: "Shirt", category: "Clothing" },
  { _id:4,name: "Jeans", category: "Clothing" },
  { _id:5,name: "Watch", category: "Accessories" }
]);

// data sanitisation
// data sanitisation
db.products.aggregate([
{
  $project:{
    "_id":0,
    "_v":0
  }
}
])

// db.products.find({});
// question 1
// group by category and count them accordingly
db.products.aggregate([
{
  $group:{
    "_id":"$category",
    "count":{
      "$sum":1
    }
  }
},
])


// question2
// remove duplicate emails from array
db.users.aggregate([
  {
    $group: {
      _id: "$email",
      count: { $sum: 1 }
    }
  },
  {
    $match: {
      count: { $gt: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      email: "$_id"
    }
  }
])

// pagination
db.orders.insertMany([
   { _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }, { _id: 5 },
  { _id: 6 }, { _id: 7 }, { _id: 8 }, { _id: 9 }, { _id: 10 }  
])
const page= 2;
const limit =3;
const skip = (page-1)*limit;
db.orders.find({}).skip(skip).limit(limit);


// get all users for last 30 days
const users = [
  { name: "A", createdAt: "2024-12-01" },
  { name: "B", createdAt: "2025-01-15" },
  { name: "C", createdAt: "2025-01-25" }
];

const last30Days = new Date();
last30Days.setDate(last30Days.getDate() - 30);
// native sort
db.users.find({
  createdAt: { $gte: last30Days }
});

// aggregation
db.users.aggregate([
  {
    $match: {
      createdAt: { $gte: last30Days }
    }
  }
]);