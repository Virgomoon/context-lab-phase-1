/* Your Code Here */

const createEmployeeRecord = function([firstName, familyName, title, payPerHour]){
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(arr){
    return arr.map(createEmployeeRecord)
}

function createTimeInEvent(dateTime) {
    let punchInDay = dateTime.split('').slice(0,10).join('')
    let punchInTime = dateTime.split('').slice(11).join('')

    let timeInObj ={
        type: "TimeIn",
        hour: parseInt(punchInTime),
        date: punchInDay
    }

    this.timeInEvents.push(timeInObj)
    return this
 
}

function createTimeOutEvent(dateTime) {
    let punchOutDay = dateTime.split('').slice(0,10).join('')
    let punchOutTime = dateTime.split('').slice(11).join('')

    let timeOutObj = {
        type: "TimeOut",
        hour: parseInt(punchOutTime),
        date: punchOutDay
    }

    this.timeOutEvents.push(timeOutObj)
    return this
    
}

function hoursWorkedOnDate(date) {
    
    let timeIn = this.timeInEvents.filter(el => (el.date === date))
    let timeOut = this.timeOutEvents.filter(el =>(el.date === date)) 

    for (let i = 0; i < timeIn.length; i++) {
    
        return (timeOut[i].hour - timeIn[i].hour)/100
    
    }
}

function wagesEarnedOnDate(date) {
    
    return hoursWorkedOnDate.call(this, date) * this.payPerHour; 
}

function findEmployeeByFirstName(srcArray, firstName) {
    let employee = srcArray.find(record => record.firstName === firstName)
    return employee
}


function calculatePayroll(arr) {
    let employeeArr = arr.reduce((acc, next)=>{
        return acc + allWagesFor.call(next)
    },0)
   return employeeArr
}


// const pracObj = createEmployeeRecord(['humpty', 'dumpty', 'rapper', 3])
// console.log(createTimeInEvent('2014-02-28 0600'))
// console.log(createTimeOutEvent('2014-02-28 1400'))

// console.log(hoursWorkedOnDate('2014-02-28'))
// console.log(wagesEarnedOnDate('2014-02-28'))

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0); // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
};

