// Code your solution here

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];




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

function matchName(db, n) {
  let collection = []
  for (let item of db) {
    if (item.name == n) {
      collection.push(item)
    }
  }
  return collection
}

matchName(drivers, "Bobby")