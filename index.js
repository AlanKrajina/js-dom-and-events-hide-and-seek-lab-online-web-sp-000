function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target')
}

function increaseRankBy(n){
  let rankedLists = document.getElementById('app').querySelectorAll( 'ul.ranked-list li' )

  for (let i = 0; i < rankedLists.length; i++) {
  rankedLists[i].innerHTML = parseInt(i,10) + n;
  }
}

function deepestChild(){
  var nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length- 1];
}
