const hl7json = require('json!../../../fakedata/hl7filter.json');
let hl7 = hl7json

// let siteId = hl7.SiteID;
// let fitlerName = hl7.FilterName
// let primaryFilters = hl7.PrimaryFilters
let secondaryFilters = hl7.SecondaryFilters
// let userId = hl7.PrimaryFilters[0]
// let patientId = hl7.PrimaryFilters[1]
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

export default hl7


function filterSwitch(filterName, filterOptions, returnDatatype, isMulti){
  let options;
  switch (filterName) {
    case 'ResultEnteredByUserID':
      console.log('ResultEnteredByUserID')
      options = getResultEnteredByUserIDOptions(filterOptions)
      break;
    case 'PatientID':
      console.log('PatientID')
      options = getPatientIDOptions(filterOptions)
      break;
    case 'StartDate':
      console.log('StartDate')
      options = getDate()
      break;
    case 'EndDate':
      console.log('EndDate')
      options = getDate()
      break;
    default:
      throw new Error('Filter Not Recognized');
  }
  return options;
}

function getResultEnteredByUserIDOptions(filterOptions){
  filterOptions.map((option,index) => {
    return fullName(option.Selection.FIRSTNAME, option.Selection.LASTNAME)
  })
}



function getFilterOptions(filterOptions, keyArray, f){
  var t = filterOptions.map((option, index) => {
    for(let i = 0; i < keyArray.length; i++){
      var x = option.Selection.keyArray[i]
    }
  })
}
/*

"ResultEnteredByUserID" {
"KEYID":
"FIRSTNAME":
"LASTNAME":
}

"PatientID"{
    "FIRSTNAME": ,
    "KEYID":
    "LASTNAME":
    "MEDICALRECORDIDENTIFIER":
}
"StartDate"{}
"EndDate"{}

*/
