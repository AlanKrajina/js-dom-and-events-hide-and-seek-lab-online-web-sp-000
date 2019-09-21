function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target')
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll( 'ul.ranked-list li' )

  for (let i = 0; i < rankedLists.length; i++) {
  rankedLists[i].innerHTML = (i + n).toString();
  }
}
