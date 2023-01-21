let soldObjects = [
    {
        address: "HORNSGATAN 154",
        image: "sold1.jpeg",
        quote: "Snabb och smidig affär. Rekommenderar varmt Anrika Fastigheter.",
        name: "Lena Andersson",
    },
    {
        address: "NYBROGATAN 8",
        image: "sold2.jpeg",
        quote: "Engagerad, påläst och pålitlig.",
        name: "Sofia Coppola",
    },
    {
        address: "BELLMANSGATAN 12",
        image: "sold3.jpeg",
        quote: "Träffsäkert estimat med rätt engagemang och kompetens för att nå dit.",
        name: "Lena Philipsson",
    },
    {
        address: "GJUTERIBACKEN 12",
        image: "sold4.jpeg",
        quote: "Lyhörd, driven och målinriktad",
        name: "Elena Ferrante",
    },
    {
        address: "FALKENBERGSGATAN 4",
        image: "sold5.jpeg",
        quote: "Proffsigt från annons till avslut",
        name: "Christer Hedin",
    },
    {
        address: "LANDSVÄGEN 49",
        image: "sold6.jpeg",
        quote: "Nöjd med bostadsannonsen",
        name: "Krister Henriksson",
    },
    {
        address: "KARLAVÄGEN 77",
        image: "sold7.jpeg",
        quote: "Inlyssnande och tog sig tid att svara på frågor. Kan varmt rekommenderas",
        name: "Chimamanda Ngozi Adichie",
    },
    {
        address: "ARTILLERIGATAN 14",
        image: "sold8.jpeg",
        quote: "Rekordförsäljning! Kommer definitivt anlita Anrika Fastigheter igen.",
        name: "Ali Smith",
    },
    {
        address: "BIRGER JARLSGATAN 44",
        image: "sold9.jpeg",
        quote: "Tipptopp!",
        name: "Jeanette Winterson",
    },
]


let grid = document.querySelector("#testimonials")

for (let i = 0; i < soldObjects.length; i++) {
    grid.innerHTML += `
    <article class="column is-4 has-text-centered">
        <figure class="image is-4by3">
            <img src="../../pictures/soldObjects/${soldObjects[i].image}" alt="${soldObjects[i].address}"/>
        </figure>
        <h2>${soldObjects[i].address}</h2>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <figure>
            <blockquote>
                <p>"${soldObjects[i].quote}"</p>
            </blockquote>
            <figcaption><cite>-${soldObjects[i].name}</cite></figcaption>
        </figure>
    </article>`
}