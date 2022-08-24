fetch(
  "https://api.nomics.com/v1/currencies/ticker?key=e7e8d3665fd7a6a32be426648c149ce50325fdcd"
)
  .then((data) => {
    //console.log(data);
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData[0].symbol);

    let tableData = "";
    objectData.map((values) => {
      tableData += `
        <tr>
        <td class="rank">${values.rank}</td>
        <td><img class="crypto-logo" src="${values.logo_url}"/> ${values.name}</td>
        <td class="market">${values.market_cap}</td>
        <td>${values.price}</td>
        
      </tr>
        
        `;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });

  function Search() {
    var searchValue = document.getElementById('search').value; 
    var searchTable = document.getElementById('table_search');  
    var searchColCount; 
   
    for (var rowIndex = 0; rowIndex < searchTable.rows.length; rowIndex++) {
        var rowData = '';
    
        if (rowIndex == 0) {
           searchColCount = searchTable.rows.item(rowIndex).cells.length;
           continue; 
        }
        
        for (var colIndex = 0; colIndex < searchColCount; colIndex++) {
            rowData += searchTable.rows.item(rowIndex).cells.item(colIndex).textContent;
        }
        
        if (rowData.indexOf(searchValue) == -1)
            searchTable.rows.item(rowIndex).style.display = 'none';
        else
            searchTable.rows.item(rowIndex).style.display = 'table-row';
    }
}
