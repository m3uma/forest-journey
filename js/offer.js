let offer = [
    {
        adventure: "walk in the woods",
        Adults: "30 PLN",
        Kids: "15 PLN",
        Group: "20 PLN",
    },

    {
        adventure: "expedition into the unknown",
        Adults: "50 PLN",
        Kids: "25 PLN",
        Group: "35 PLN",
    },

    {
        adventure: "forest animals search",
        Adults: "30 PLN",
        Kids: "15 PLN",
        Group: "20 PLN",
    },

    {
        adventure: "collecting forest treats",
        Adults: "30 PLN",
        Kids: "15 PLN",
        Group: "20 PLN",
    },

    {
        adventure: "ancient legends of the forest by the fire",
        Adults: "80 PLN",
        Kids: "40 PLN",
        Group: "60 PLN",
    },

    {
        adventure: "elven feast",
        Adults: "100 PLN",
        Kids: "50 PLN",
        Group: "75 PLN",
    },

    {
        adventure: "night under the stars",
        Adults: "150 PLN",
        Kids: "75 PLN",
        Group: "100 PLN",
    },

    {
        adventure: "4 adventures pack",
        family: "10% discount",
        Group: "15% discount",
    },

    {
        adventure: "5 adventures pack",
        family: "15% discount",
        Group: "20% discount",
    },

    {
        adventure: "6 adventures pack",
        family: "20% discount",
        Group: "22% discount",
    },

    {
        adventure: "full package with a twist",
        discount: "25% discount",
    },

    {
        info: "*above 10 people",
    }
]


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        if (key === "group")
            text = document.createTextNode(`${key}*`);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);

            if (key === 'info')
                cell.colSpan = "4";
            else if (key === 'discount')
                cell.colSpan = "3";
            else if (key === 'family')
                cell.colSpan = "2";
            cell.appendChild(text);
        }
    }
}

function generateTableMobile(table, data) {
    let row = table.insertRow();
    let th = document.createElement("th");
    let text = document.createTextNode("adventures");
    let titleAdventure = null;
    th.appendChild(text);
    row.appendChild(th);
    for (let element of data) {
        let row = table.insertRow();
        let cell = row.insertCell();
        for (key in element) {
            if (key === 'adventure') {
                titleAdventure = document.createElement("b");
                text = document.createTextNode(`${element[key]} `);
                titleAdventure.appendChild(text);
                cell.appendChild(titleAdventure);

            } else if (key === 'info' || key === 'discount' ) {
                text = document.createTextNode(`${element[key]} `);
                cell.appendChild(text);
                break;
            } else if (key === 'family') {
                text = document.createTextNode(`Adults & Kids: ${element[key]} `);
                cell.appendChild(text);
                
            }
            else {
                text = document.createTextNode(`${key}: ${element[key]} `);
                cell.appendChild(text);  
            }

            cell.appendChild(document.createElement("br"));
        }
    }
}

let table = document.querySelector(".offer__table");
let tableMobile = document.querySelector(".offer__table--mobile");
let data = Object.keys(offer[0]);
generateTableHead(table, data);
generateTable(table, offer);
generateTableMobile(tableMobile, offer);
