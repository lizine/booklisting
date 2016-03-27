export function selectBook(book){
  //this function is actioncreator it needs to retur action object
  return {
    type: 'BOOK_SELECTED',
    payload : book
  };
}
