// Code your solution
function findMatching(names, target){
    const result = names.filter((driver)=> driver.toLowerCase() === target.toLowerCase())
    return result
}
function fuzzyMatch(names, target){
    const result = names.filter((driver)=>driver.startsWith(target))
    return result
}

function matchName(names, target){
    const result = names.filter((driver)=> driver.name==target)
    return result
}