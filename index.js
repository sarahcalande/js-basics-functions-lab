// Code your solution in this file!


function distanceFromHqInBlocks(pickupLocation){
  if (pickupLocation > 42){
    return (pickupLocation - 42)
  } else {
    return (42 - pickupLocation)
  }
}
// take in passenger pickup location return number of blocks from HQ
//blocks from HQ to distance in feet



function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264
}


function distanceTravelledInFeet(startBlock, endBlock){
  if (endBlock > startBlock) {
  blocks = endBlock - startBlock
} else {
  blocks = startBlock - endBlock
}
feet = blocks * 264
return feet
}


function calculatesFarePrice(startBlock, endBlock){
  let distance = distanceTravelledInFeet(startBlock, endBlock)
    if (distance > 400 && distance < 2000) {
    return .02 * (distance-400)
  } else if (distance > 2000 && distance < 2500){
    return 25
  } else if (distance > 2500){
    return 'cannot travel that far'
  } else {
    return 0
  }
}
