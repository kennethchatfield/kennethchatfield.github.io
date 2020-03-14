

const table = document.getElementsByTagName("table")[0];
const tableRows = table.getElementsByTagName("tr");
const headers = ["element","font-family","font-size", "color", "background", "example"]
const acceptableStyleAttributes = [ "font-family","font-size", "color", "background" ]
for( let i = 1; i < tableRows.length; i++){
    const tableRow = tableRows[i];
    const tableCells = tableRow.getElementsByTagName("td");

    let newStyleAttributes = {};
    for( let c = 0; c < tableCells.length; c++){
        const tableCell = tableCells[c];
        const header = headers[c];
        if( acceptableStyleAttributes.includes(header)){
            let cellContent = tableCell.innerHTML;
            if( header === "font-family") cellContent = `'${cellContent}', sans-serif`
            newStyleAttributes[header] =  cellContent;
        }
    }
    if( Object.keys(newStyleAttributes).length > 0){
        for( let c = 0; c < tableCells.length; c++){
            const tableCell = tableCells[c];
            Object.keys(newStyleAttributes).map(attr=>{
                tableCell.style[attr] = newStyleAttributes[attr]
            })
        }
    }
}