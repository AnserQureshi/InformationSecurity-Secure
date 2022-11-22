function addToList()
{
    var whatUserHaveSearched=document.getElementById("searched-for").value;
    var creatinglist = document.createElement('li');
    creatinglist.appendChild(document.createTextNode(whatUserHaveSearched));
    document.querySelector('ul').appendChild(creatinglist);
}
