var http = require("http");

var printer = require("./printer");


function get(){
  //Connect to the API URL (http://developers.agenciaideias.com.br/loterias/megasena/json)
  var request = http.get("http://developers.agenciaideias.com.br/loterias/megasena/json", function(response){
    var body = "";
    //Read the data
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function(){
      if(response.statusCode === 200) {
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printer.printMessage("Concurso nr.: " + profile.concurso.numero +
          "\nDezenas Sorteadas: " + profile.concurso.numeros_sorteados);
        } catch(error) {
          //Parse Error
          printer.printError(error);
        }
      } else {
        //Status Code Error
        printer.printError({message: "Ocorreu um erro ao acessar a pagina" + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });
  
  //Connection Error
  request.on("error", printer.printError);
}


module.exports.get = get;












