function init(){
  const name = "Caden Ho";
  
  const alertMeDiv = document.getElementById("entrybutton");
  const textInput = document.getElementById("entryinput");
  const displayText = document.getElementById("textoutput");
  
  alertMeDiv.addEventListener("click", function() {
	  const inputValue = textInput.value;
	  alert(`${name}: ${inputValue}`);
	  displayText.textContent = inputValue;
  });
}
  
 
window.addEventListener('load', init);
