function init(){
  const name = "Caden Ho";
  
  const alertMeDiv = document.getElementById("alertMe");
  const textInput = document.getElementById("textInput");
  const displayText = document.getElementById("displayText");
  
  alertMeDiv.addEventListener("click, function() {
	  const inputValue = textInput.value;
	  alert(`${name}: ${inputValue}`);
	  displayText.textContent = inputValue;
  });
}
  
 
window.addEventListener('load', init);
