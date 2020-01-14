export const getIphones = (searchterm) => {
  // use the fetch API to load iphones.json to iphones variable
return  fetch('/iphones.json')
          .then(response =>  response.json())
          .then(parsedJson => {
            const iphones = parsedJson;
            return filterIphones(iphones, searchterm);
          });
};

export const filterIphones = (iphones, searchterm) => {
  return iphones.filter(iphone => {
    return filterIphone(iphone, searchterm);
  });
};

function filterIphone(iphones, searchterm) {
  if(iphones.color.toLowerCase().includes(searchterm.toLowerCase())) {
    return iphones;
  } else if(iphones.capacity.toLowerCase().includes(searchterm.toLowerCase())) {
    return iphones;
  } else if(iphones.name.toLowerCase().includes(searchterm.toLowerCase())) {
    return iphones;
  } else if(iphones.price === parseInt(searchterm)) {
    return iphones;
  }  else {
    return false;
  }
}