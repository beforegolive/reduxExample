export function selectChange(state={selectedValue:'', books:[]}, action){
  switch (action.type) {
    case 'SELECTCHANGE':
      var newState = Object.assign({},
        ...state,
        {
          books,
          selectedValue: action.value
        })

        if(newState.selectedValue !== undefined && newState.selectedValue !=='' )
          requireBooksInfo(newState.selectedValue);

      return newState;

    default:
      return state;
  }
}

var books=[];

function requireBooksInfo(keyWord){
  var url="https://api.douban.com/v2/book/search?q="+keyWord;
  $.ajax({
    type: "GET",
    dataType: 'jsonp',
    url:url
  }).done(function(json){
    books= json.books;
    console.log(books);
  })
}
