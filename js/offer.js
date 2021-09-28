let offer = [
    {
        adventure: "walk in the woods",
        adults: "30 PLN",
        kids: "15 PLN",
        group: "20 PLN",
    },

    {
        adventure: "expedition into the unknown",
        adults: "50 PLN",
        kids: "25 PLN",
        group: "35 PLN",
    },

    {
        adventure: "forest animals search",
        adults: "30 PLN",
        kids: "15 PLN",
        group: "20 PLN",
    },

    {
        adventure: "collecting forest treats",
        adults: "30 PLN",
        kids: "15 PLN",
        group: "20 PLN",
    },

    {
        adventure: "ancient legends of the forest by the fire",
        adults: "80 PLN",
        kids: "40 PLN",
        group: "60 PLN",
    },

    {
        adventure: "elven feast",
        adults: "100 PLN",
        kids: "50 PLN",
        group: "75 PLN",
    },

    {
        adventure: "night under the stars",
        adults: "150 PLN",
        kids: "75 PLN",
        group: "100 PLN",
    },

    {
        adventure: "4 adventures pack",
        adults: "10% discount",
        kids: "10% discount",
        group: "15% discount",
    },

    {
        adventure: "5 adventures pack",
        adults: "15% discount",
        kids: "15% discount",
        group: "20% discount",
    },

    {
        adventure: "6 adventures pack",
        adults: "20% discount",
        kids: "20% discount",
        group: "22% discount",
    },

    {
        adventure: "full package with a twist",
        adults: "25% discount",
        kids: "25% discount",
        group: "25% discount",
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
        if(key === "group")
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
            else if (element[key].includes("adventures pack")) {
                console.log(row);
               
            }

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

            } else if (key === 'info' || element === data[data.length - 2]) {
                text = document.createTextNode(`${element[key]} `);
                cell.appendChild(text);
                break;
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
