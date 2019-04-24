function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
   var lis = document.querySelectorAll('ul.ranked-list');
   
   for (let i = 0; i < lis.length; i++) {
     lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
   }
}

function deepestChild() {
  var current = document.getElementById('grand-node');
  
  while (current.children.length > 0) {
    current = current.children[0];
  }
  
  return current;
}