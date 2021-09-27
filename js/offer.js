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
        adults: "30 PLN",
        kids: "15 PLN",
        group: "20 PLN",
    },

    {
        adventure: "nic",
        adults: "30 PLN",
        kids: "15 PLN",
        group: "20 PLN",
    },
]

console.log(Offer.length);

for (let i in Offer){
    console.log(Offer[i].adventure);
}

