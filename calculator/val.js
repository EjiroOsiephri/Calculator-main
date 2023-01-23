var output = document.getElementById("output-go");

function display(num) {
  output.value += num;
}
function Clear() {
  return (output.value = "");
}
function calculate() {
  try {
    return (output.value = eval(output.value));
  } catch (err) {
    alert("invalid");
  }
}
var DEL = () => {
  return (output.value = output.value.slice(0, -1));
};
