function findMatching(db, names) {
  const result = db.filter(db => db.toLowerCase() == names.toLowerCase())
  return result
}

function fuzzyMatch (db, letters) {
  let collection = []
  for (let item of db) {
    if (!item.indexOf(letters))
     collection.push(item)
  }
  return collection
}

fuzzyMatch(drivers, "Sa")

function matchName(db, n) {
  let collection = []
  for (let item of db) {
    if (item.name == n) {
      collection.push(item)
    }
  }
  return collection
}
