let grid = document.querySelector("#employees")

for (let i = 0; i < 6; i++) {
    // grid.append(card)
    grid.innerHTML += `
    <article class="column is-4 has-text-centered">
        <figure class="image">
            <img src="/pictures/workers/006.webp">
        </figure>
        <h3>Anders Andersson</h3>
        <h4>VD & GRUNDARE</h4>
        <p>anders.andersson@anrikafastigheter.se</p>
    </article>`
}