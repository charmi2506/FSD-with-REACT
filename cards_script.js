var totalcards=[{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
},
{
    "Image":"./Data-Structures-Algorithms-removebg-preview.png",
   "price":1000,
    "Brand": "Loius Vitton"
}
];

const wrapper = document.getElementsByClassName("card-container");
totalcards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-container");

    cardDiv.innerHTML = `
        <div class="image-section">
            <img src="${card.Image}" alt="Product Image" />
        </div>
        <div class="info-section">
            <div class="price">Price: ${card.price}</div>
            <div class="brand">Brand: ${card.Brand}</div>
        </div>
    `;

    wrapper.appendChild(cardDiv);
});