```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "result",
    },
  },
  {
    $unwind: {
      path: "$result",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $match: {
      "result.someField": { $exists: true },
    },
  },
  {
    $group: {
      _id: "$_id",
      results: {
        $push: "$result"
      }
    }
  }
];

const result = await collectionA.aggregate(pipeline).toArray();
```