//Print out message
function printMessage(data) {
  var message = data;
  console.log(message);
}

//Print out error messages
function printError(error){
    console.error(error.message);
}


module.exports.printMessage = printMessage;
module.exports.printError = printError;
