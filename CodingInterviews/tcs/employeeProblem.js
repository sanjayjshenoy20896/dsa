// employee problem -> TCS
var employeeList = [

	{

		id:1,

		name: 'Raju',

		managerId: 2,

		status: 1

	},

	{

		id:2,

		name: 'Binu',

		managerId: 3,

		status: 1

	},

	{

		id:3,

		name: 'XYZ',

		managerId: 4,

		status: 0

	},

	{

		id:4,

		name: 'Gopu',

		managerId: null,

		status: 1

	},

];


function getManagerEmployeeMapping(arr){
    
    // const obj = {};
    // const employeeObj = arr.find((val)=> val.name === key);
    // const managerObj = arr.find((val)=> val.id == employeeObj.managerId);
    // console.log(employeeObj);
    // console.log(managerObj);
    // obj[employeeObj.name] = managerObj.name
    // console.log(obj);
    const employeeMapping = arr.map((item)=>{
      const managerObj = arr.find((p)=>p.managerId === item.managerId)
      // console.log(managerObj);
      if(managerObj.id){
        return {
          name:"sanjay"
          // managerObj[name] = arr.find((si)=> si.managerId === managerObj.id).name
        }
      }
    })

}
const newList = getManagerEmployeeMapping(employeeList);