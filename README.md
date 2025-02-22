# MongoDB Aggregation Pipeline Bug

This repository demonstrates a subtle bug encountered while using MongoDB's aggregation pipeline with the `$lookup`, `$unwind`, and `$match` stages. The issue arises when trying to filter documents based on fields added by `$lookup` after `$unwind` is used. The `$match` stage filters unexpectedly, leading to incorrect results.

The `bug.js` file contains the problematic code, illustrating the unexpected behavior. The `bugSolution.js` file provides a corrected version that produces the expected results.

## Bug Description

The aggregation pipeline intends to join two collections, unwind the joined array, and then filter based on a field present only in the joined documents. However, the `$match` stage improperly filters documents, possibly due to issues relating to how the pipeline handles the unwinding or the order of operations in combination with the existence check.