let TEMPDATA = require('json!../../../fakedata/TEMPHL7DATA.json');

let PatientLabs = TEMPDATA

function reportResults(Data){
  var dataArray=[]
  for (let i = 0; i < Data.length; i++){
    var date = Data[i].RESULTENTEREDDATE
    var labs = Data[i].PatientLabs
    for (let x= 0; x<labs.length; x++){
      let t = {
        fullName: fullName(labs[x].Patient.FIRSTNAME, labs[x].Patient.LASTNAME),
        mrid: labs[x].Patient.MEDICALRECORDIDENTIFIER,
        testName: labs[x].TestName,
        result: labs[x].RESULT,
        date: safeDate(date)
      }
      dataArray.push(t)
    }
  }
  return dataArray
}

function fullName(first, last){
  return `${first} ${last}`
}

var today = new Date()

function safeDate(date){
  if(safeDate !== null){
    return date
  } else {
    return today
  }
}

// console.log(TEMPDATA.ResultDates[0].PatientLabs[0].Patient.FIRSTNAME)


PatientLabs = reportResults(TEMPDATA.ResultDates);
export default PatientLabs
