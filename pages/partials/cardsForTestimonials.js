let grid = document.querySelector("#testimonials")
let card = document.createElement("div")

// card.className = "testimonial-card"
// card.innerHTML = `
// <article class="tile is-child is-4 has-text-centered">
//     <figure class="image is-4by3">
//         <img src="/pictures/P1.jpeg">
//     </figure>
//     <h3>WARFVINGES VÄG, KUNGSHOLMEN</h3>
//     <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
//     <p>“Snabb och smidig affär”</p>
// </article>`

for (let i = 0; i < 9; i++) {
    // grid.append(card)
    grid.innerHTML += `
    <article class="column is-4 has-text-centered">
        <figure class="image is-4by3">
            <img src="/pictures/P1.jpeg">
        </figure>
        <h3>WARFVINGES VÄG, KUNGSHOLMEN</h3>
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <p>“Snabb och smidig affär”</p>
    </article>`
}