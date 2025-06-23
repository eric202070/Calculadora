const Show_text = document.querySelector("#Show").value;
let valorum = [];
let alertShown = false;
const butao = document.querySelectorAll("input[type='button']");
const registros = document.querySelector("#Registros");
let tomate;
let rucula;
let jenifer;
select();
// function calc() {select()
//   eval(document.querySelector("#Show").value);
//   console.log(eval(document.querySelector("#Show").value));
// }

function select() {
  butao.forEach((button) => {
    button.addEventListener("click", () => {
      const valores = button.value;
      const operators = ["/", "*", "-", "+", "%", "x²", "."];
      if (operators.includes(valores)) {
        const Show_text = document.querySelector("#Show").value;
        const lastchar = Show_text.charAt(Show_text.length - 1);
        if (operators.includes(lastchar)) {
          return;
        }
      }

      if (document.querySelector("#Show").value.length < 12) {
        switch (valores) {
          case "1":
            document.querySelector("#Show").value += Show_text + "1";
            valorum.push(1);
            break;

          case "2":
            document.querySelector("#Show").value += Show_text + "2";
            valorum.push(2);
            break;

          case "3":
            document.querySelector("#Show").value += Show_text + "3";
            valorum.push(3);
            break;

          case "4":
            document.querySelector("#Show").value += Show_text + "4";
            valorum.push(4);
            break;

          case "5":
            document.querySelector("#Show").value += Show_text + "5";
            valorum.push(5);
            break;

          case "6":
            document.querySelector("#Show").value += Show_text + "6";
            valorum.push(6);
            break;

          case "7":
            document.querySelector("#Show").value += Show_text + "7";
            valorum.push(7);
            break;
          case "8":
            document.querySelector("#Show").value += Show_text + "8";
            valorum.push(8);
            break;

          case "9":
            document.querySelector("#Show").value += Show_text + "9";
            valorum.push(9);
            break;

          case "0":
            document.querySelector("#Show").value += Show_text + "0";
            valorum.push(0);
            console.log(Show_text.value);
            break;

          case "C":
            valorum.pop();
            document.querySelector("#Show").value = document
              .querySelector("#Show")
              .value.substring(
                0,
                document.querySelector("#Show").value.length - 1
              );
            console.log(valorum);
            console.log(document.querySelector("#Show").value);
            break;
          case "CE":
            document.querySelector("#Show").value = "";
            break;
          case "/":
            document.querySelector("#Show").value += Show_text + "/";
            valorum.push("/");
            break;
          case "*":
            document.querySelector("#Show").value += Show_text + "*";
            valorum.push("*");
            break;
          case "-":
            document.querySelector("#Show").value += Show_text + "-";
            valorum.push("-");
            break;
          case "+":
            document.querySelector("#Show").value += Show_text + "+";
            valorum.push("+");
            break;
          case ".":
            document.querySelector("#Show").value += Show_text + ".";
            valorum.push(".");
            break;
          case "%":
            document.querySelector("#Show").value += Show_text + "%";
            valorum.push("%");
            break;
          case "x²":
            document.querySelector("#Show").value += "²";
            valorum.push("^2");
            break;
          case "Calc":
            confirm = true
            console.log(confirm)
            const perma = document.querySelector("#Show").value;
            if (document.querySelector("#Show").value.indexOf("%") == -1) {
              if (document.querySelector("#Show").value.indexOf("²") == -1) {
                jenifer = eval(document.querySelector("#Show").value);
                if (isFloat(jenifer)) {
                  const roberto = jenifer.toFixed(2);
                  rucula = (document.querySelector("#Show").value =
                    roberto);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    jenifer +
                    " , " +
                    roberto +
                    " = " +
                    rucula +
                    "<br>";
                } else {
                  const roberto = jenifer;
                  rucula = (document.querySelector("#Show").value =
                    roberto);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    jenifer +
                    " , " +
                    roberto +
                    " = " +
                    rucula +
                    "<br>";
                }
              } else {
                console.log(potentia(document.querySelector("#Show").value));
                const lady =
                  potentia(document.querySelector("#Show").value) *
                  potentia(document.querySelector("#Show").value);
                if (isFloat(lady)) {
                  const ericolor = lady.toFixed(5);
                  const alface = (document.querySelector("#Show").value =
                    ericolor);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    lady +
                    " , " +
                    ericolor +
                    " = " +
                    alface +
                    "<br>";
                } else {
                  const ericolor = lady;
                  const alface = (document.querySelector("#Show").value =
                    ericolor);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    lady +
                    " , " +
                    ericolor +
                    " = " +
                    alface +
                    "<br>";
                }
              }
            } else {
              console.log(porcentage(document.querySelector("#Show").value));
              const eric =
                porcentage(document.querySelector("#Show").value) / 100;
              if (isFloat(eric)) {
                const lilia = eric.toFixed(2);
                tomate = (document.querySelector("#Show").value = lilia);
                registros.innerHTML +=
                  "Registro de resultado: " +
                  perma +
                  " , " +
                  eric +
                  " , " +
                  lilia +
                  " = " +
                  tomate +
                  "<br>";
              } else {
                const lilia = eric;
                tomate = (document.querySelector("#Show").value = lilia);
                registros.innerHTML +=
                  "Registro de resultado: " +
                  perma +
                  " , " +
                  eric +
                  " , " +
                  lilia +
                  " = " +
                  tomate +
                  "<br>";
              }
            }

            if(tomate == 123 || rucula == 123 || jenifer == 123){
              registroCalc.classList.remove('yas')
              registroCalc.classList.remove('happy')
              registroCalc.classList.add('rude')
            }
            console.log(rucula)

            // function isFloat(num) {
            //   return !Number.isInteger(num);
            // }
            break;
        }
      } else if (!alertShown) {
        alert("maximo de 12 numeros");
        alertShown = true;
      } else {
        switch (valores) {
          case "C":
            valorum.pop();
            document.querySelector("#Show").value = document
              .querySelector("#Show")
              .value.substring(
                0,
                document.querySelector("#Show").value.length - 1
              );
            console.log(valorum);
            console.log(document.querySelector("#Show").value);
            alertShown = false;
            break;
          case "CE":
            document.querySelector("#Show").value = "";
            alertShown = false;
            break;
          case "Calc":
            const perma = document.querySelector("#Show").value;
            if (document.querySelector("#Show").value.indexOf("%") == -1) {
              if (document.querySelector("#Show").value.indexOf("²") == -1) {
                jenifer = eval(document.querySelector("#Show").value);
                if (isFloat(jenifer)) {
                  const roberto = jenifer.toFixed(2);
                  rucula = (document.querySelector("#Show").value =
                    roberto);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    jenifer +
                    " , " +
                    roberto +
                    " = " +
                    rucula +
                    "<br>";
                } else {
                  const roberto = jenifer;
                  rucula = (document.querySelector("#Show").value =
                    roberto);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    jenifer +
                    " , " +
                    roberto +
                    " = " +
                    rucula +
                    "<br>";
                }
              } else {
                console.log(potentia(document.querySelector("#Show").value));
                const lady =
                  potentia(document.querySelector("#Show").value) *
                  potentia(document.querySelector("#Show").value);
                if (isFloat(lady)) {
                  const ericolor = lady.toFixed(5);
                  const alface = (document.querySelector("#Show").value =
                    ericolor);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    lady +
                    " , " +
                    ericolor +
                    " = " +
                    alface +
                    "<br>";
                } else {
                  const ericolor = lady;
                  const alface = (document.querySelector("#Show").value =
                    ericolor);
                  registros.innerHTML +=
                    "Registro de resultado: " +
                    perma +
                    " , " +
                    lady +
                    " , " +
                    ericolor +
                    " = " +
                    alface +
                    "<br>";
                }
              }
            } else {
              console.log(porcentage(document.querySelector("#Show").value));
              const eric =
                porcentage(document.querySelector("#Show").value) / 100;
              if (isFloat(eric)) {
                const lilia = eric.toFixed(2);
                tomate = (document.querySelector("#Show").value = lilia);
                registros.innerHTML +=
                  "Registro de resultado: " +
                  perma +
                  " , " +
                  eric +
                  " , " +
                  lilia +
                  " = " +
                  tomate +
                  "<br>";
              } else {
                const lilia = eric;
                tomate = (document.querySelector("#Show").value = lilia);
                registros.innerHTML +=
                  "Registro de resultado: " +
                  perma +
                  " , " +
                  eric +
                  " , " +
                  lilia +
                  " = " +
                  tomate +
                  "<br>";
              }
            }


            console.log(rucula)
            if(rucula == 123){
              registroCalc.classList.add('rude')
            }

            // function isFloat(num) {
            //   return !Number.isInteger(num);
            // }
            alertShown = false;
            break;
        }
      }
    });
  });
}

function potentia(nam) {
  if (nam.indexOf("²") != -1 && nam.indexOf(".") == -1) {
    const inteiro = nam.substring(0, nam.length - 1);
    console.log(inteiro);
    return parseInt(inteiro);
  } else if (nam.indexOf("²") != -1 && nam.indexOf(".") != -1) {
    const float = nam.substring(0, nam.length - 1);
    return parseFloat(float);
  }
}

function isFloat(nem) {
  return !Number.isInteger(nem);
}

function porcentage(num) {
  if (num.indexOf("%") != -1 && num.indexOf(".") == -1) {
    const inteiro = num.substring(0, num.length - 1);
    return parseInt(inteiro);
  } else if (num.indexOf("%") != -1 && num.indexOf(".") != -1) {
    const float = num.substring(0, num.length - 1);
    return parseFloat(float);
  }
}
