isUnique(value) {

    if (value === '') return true

  // standalone validator ideally should not assume a field is required

    var age = moment(moment.now()).diff(value,"years");

if(age >=18 && age <=75 ){

return true

    }else{

return false

    }

}

function isUnique(value: any) {
    throw new Error("Function not implemented.");
}
