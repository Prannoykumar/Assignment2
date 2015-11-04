console.log("I am popup.js");
var checkPageButton = document.getElementById('btn');
//document.getElementById("btn").onclick = function(e){
  checkPageButton.addEventListener('click', function() {
  hello();
});

function hello() {
  console.log("hello");
  var str=document.getElementById("finddata").value;
  chrome.runtime.sendMessage({
      str
    },
    function(response) {
      document.getElementById("div").textContent = response.msg;
    });
}