'use strict';

export default function zoneCalc(postZone) {
  if (postZone === 1) {
    return "North"
  } else if (postZone === 2) {
    return "East"
  } else if (postZone === 3) {
    return "South"
  } else {
    return "West"
  }
}
