function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target')
}

function increaseRankBy(n){
  let rankedLists = document.getElementById('app').querySelectorAll( 'ul.ranked-list li' )

  for (const element of rankedLists) {
    return element+n;
  }

}
