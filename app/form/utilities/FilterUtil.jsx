'use strict'

const hl7json = require('json!../../../fakedata/hl7filter.json');
let hl7 = hl7json

// let siteId = hl7.SiteID;
// let fitlerName = hl7.FilterName
// let primaryFilters = hl7.PrimaryFilters
// let secondaryFilters = hl7.SecondaryFilters
// let userId = hl7.PrimaryFilters[0]
let patientId = hl7.PrimaryFilters[2].options
// let startDate = hl7.PrimaryFilters[2]
// let endDate = hl7.PrimaryFilters[3]
//
// let sysDateTag = 'System.Nullable`1[System.DateTime]'
// let sysDoubleTag = 'System.Double'
//
export function fullName(first, last){
  return `${first} ${last}`
}
//
// hl7.PrimaryFilters.map((f,i) => {
//   switch (f.Name) {
//     case 'UserID':
//       console.log('UserID')
//       break;
//     case 'ResultEnteredByUserID':
//       console.log('ResultEnteredByUserID')
//       break;
//     case 'PatientID':
//       console.log('PatientID')
//       break;
//     case 'StartDate':
//       console.log('StartDate')
//       break;
//     case 'EndDate':
//       console.log('EndDate')
//       break;
//     default:
//       console.log('nothing')
//   }
// })

// let sysUserTag = 'UserID'
// let sysPatientTag = 'PatientID'
// let sysStartDateTag = 'StartDate'
// let sysEndDateTag = 'EndDate'

// console.log(siteId)
// console.log(fitlerName)
// console.log(primaryFilters)
// console.log(secondaryFilters)
// console.log(userId)
// console.log(patientId)
// console.log(startDate)
// console.log(endDate)
// console.log(hl7)



//
// function getResultEnteredByUserIDOptions(filterOptions){
//   filterOptions.map((option,index) => {
//     return fullName(option.Selection.FIRSTNAME, option.Selection.LASTNAME)
//   })
// }

var k = ['FIRSTNAME', 'LASTNAME', 'MEDICALRECORDIDENTIFIER'];
var fo = patientId;

// console.log(getSecondaryOptions(fo))


  export function getFilterOptions(filterOptions){
    return filterOptions.map((option, index) => {
      return option.Selection
    })
  }

  export function getSecondaryOptions(filterOptions){
    let secondaryFiltersArray = [];
    filterOptions.map((option, index) => {
      if (option.SecondaryFilters !== null){
        secondaryFiltersArray.push(option.SecondaryFilters)
      }
    })
    return secondaryFiltersArray
  }
