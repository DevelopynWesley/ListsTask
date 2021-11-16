function appendList() {

    let currList = document.getElementById('objList');
    let newText = document.getElementById('newText').value;

    let newLItem = document.createElement('li');
    newLItem.appendChild(document.createTextNode(newText));
    currList.appendChild(newLItem);

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "X"
    
    
    newLItem.id = document.getElementById("objList").getElementsByTagName("li").length + 1
     delBtn.onclick = function () {document.getElementById(newLItem.id).remove();}
     newLItem.appendChild(delBtn);
     console.log('appended');

}

function deleteItem() {

    let index = document.getElementById('delNum').value
    let currList = document.getElementById('objList')
    currList.removeChild(currList.childNodes[index])
    
    let content = currList.innerHTML;
    currList.innerHTML= content; 

}

function checkEnter(e)
{
    let key=e.keyCode || e.which;
  if (key==13){
     appendList();
  }

}