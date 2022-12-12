let employees = [
    {
        name: "Erik Andersson",
        picture: "001.jpg",
        title: "VD & Grundare",
        email: "erik.andersson@anrika.se",
        description: "Jag är en glad person som gillar att cyckla på fritiden."
    },
    {
        name: "Anna Johansson",
        picture: "002.jpg",
        title: "Mäklare",
        email: "anna.johansson@anrika.se",
        description: "Jag är en trevlig person som gillar att träffa vänner och familj."
    },
    {
        name: "Margareta Karlsson",
        picture: "003.jpg",
        title: "Mäklare",
        email: "margareta.karlsson@anrika.se",
        description: "Jag är en glad person som älskar att sälja bostäder."
    },
    {
        name: "Elisabeth Nilsson",
        picture: "004.jpg",
        title: "Mäklare",
        email: "elisabeth.nilsson@anrika.se",
        description: "Jag är en vänlig person som gärna går ut på ett glas."
    },
    {
        name: "Johan Eriksson",
        picture: "005.jpg",
        title: "Ekonomi",
        email: "johan.eriksson@anrika.se",
        description: "Jag är en norgrann person som gillar att räkna."
    },
    {
        name: "Per Larsson",
        picture: "006.webp",
        title: "Ekonomi",
        email: "per.larsson@anrika.se",
        description: "Jag är en rolig person som älskar ett bra skämt!"
    },
]

let grid = document.querySelector("#employees")

for (let i = 0; i < employees.length; i++) {
    // grid.append(card)
    grid.innerHTML += `
    <article class="column is-4 has-text-centered">
        <figure class="image">
            <img src="/pictures/workers/${employees[i].picture}" alt="#"/>
        </figure>
        <h3>${employees[i].name}</h3>
        <h4>${employees[i].title}</h4>
        <p>${employees[i].email}</p>
        <p>${employees[i].description}</p>
    </article>`
}