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

let details = ["detals1", "detals2", "detals3", "detals4",
    "detals5", "detals6", "detals7", "detals8", "detals9",
    "Choose 6 of the available services we offer and get a discount.", 
               "Buy the full package of our services and receive a 25% discount and an additional surprise gift.", 
               "There must be at least 10 people in the group."]


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        if (key === "Group")
            text = document.createTextNode(`${key}*`);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data, detail) {
    rowCounter = 0;
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            row.id = rowCounter;
            cell.onclick = () => {
                (data[row.id].adventure)
                ? showDetails(data[row.id].adventure, detail[row.id])
                : showDetails("info", detail[row.id]);
            }
            let text = document.createTextNode(element[key]);

            if (key === 'info')
                cell.colSpan = "4";
            else if (key === 'discount')
                cell.colSpan = "3";
            else if (key === 'family')
                cell.colSpan = "2";
            cell.appendChild(text);


        }
        rowCounter++;
    }

}

function generateTableMobile(table, data, detail) {
    let row = table.insertRow();
    let th = document.createElement("th");
    let text = document.createTextNode("adventures");
    let titleAdventure = null;
    rowCounter = 0;
    th.appendChild(text);
    row.appendChild(th);
    for (let element of data) {
        let row = table.insertRow();
        let cell = row.insertCell();
        row.id = rowCounter;
        cell.onclick = () => {
            (data[row.id].adventure)
            ? showDetails(data[row.id].adventure, detail[row.id])
            : showDetails("info", detail[row.id]);
        }
        for (key in element) {
            if (key === 'adventure') {
                titleAdventure = document.createElement("b");
                text = document.createTextNode(`${element[key]} `);
                titleAdventure.appendChild(text);
                cell.appendChild(titleAdventure);

            } else if (key === 'info' || key === 'discount') {
                text = document.createTextNode(`${element[key]} `);
                cell.appendChild(text);

            } else if (key === 'family') {
                text = document.createTextNode(`Adults & Kids: ${element[key]} `);
                cell.appendChild(text);

            } else if (key === "Group") {
                text = document.createTextNode(`${key}*: ${element[key]} `);
                cell.appendChild(text);
            }
            else {
                text = document.createTextNode(`${key}: ${element[key]} `);
                cell.appendChild(text);
            }

            cell.appendChild(document.createElement("br"));
        }
        rowCounter++;
    }
}

function showDetails(title, data) {
    detailsContent.style.display = "block";
    const detailDiv = document.querySelector(".detail__content");
    const detailHeader = document.querySelector(".h1__detail");
    detailHeader.innerHTML = title;
    detailDiv.innerHTML = data;

}

document.querySelector(".close__details").onclick = () => detailsContent.style.display = "none";

let table = document.querySelector(".offer__table");
let tableMobile = document.querySelector(".offer__table--mobile");
let data = Object.keys(offer[0]);
let rowCounter = 0;
const detailsContent = document.querySelector('.offer__detail');

generateTableHead(table, data);
generateTable(table, offer, details);
generateTableMobile(tableMobile, offer, details);




