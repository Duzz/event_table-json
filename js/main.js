// Call to 'GET' json file
var showInfo = document.getElementById('show-list');
var showList = new XMLHttpRequest();
showList.open('GET', 'http://testlooper.surge.sh/shows.json');

// Parse json file
showList.onload = function() {
  var showData = JSON.parse(showList.responseText);
  renderTableHTML(showData);
};
showList.send();


// Loop to get data for event table
function renderTableHTML(data) {
  var htmlString = '<tr>';
  for (i = 0; i < data.length; i++) {
    htmlString += `<td>${data[i].location.name} in ${data[i].location.city}</td>
      <td>${data[i].date}</td>
      <td><a href="${data[i].url}" target="_blank" class="btn btn-primary btn-sm" role="button">Buy</a>
      </td>
    </tr>
    `
  }
  showInfo.insertAdjacentHTML('beforeend', htmlString)
}


//Get data for mini-map modal
