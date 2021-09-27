window.scrollBy(document.innerHeight);

const Offer = [
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

console.log(Offer.length);

for (let i in Offer){
    console.log(`Adventure: ${Offer[i].adventure}, Adults: ${Offer[i].adults}, Kids: ${Offer[i].kids}, Group: ${Offer[i].group}`);
}

