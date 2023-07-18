function search() {
    // Your search logic goes here...
    // Assuming you have the search results as an array of objects: searchedResults
    const searchedResults = [
        { title: "Result 1", description: "This is the first search result." },
        { title: "Result 2", description: "This is the second search result." },
        { title: "Result 3", description: "This is the third search result." },
    ];

    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    searchedResults.forEach((item, index) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-item");
        resultDiv.setAttribute("onclick", `displayPopup(${index})`);

        const titleElement = document.createElement("p");
        titleElement.classList.add("result-title");
        titleElement.innerText = item.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("result-description");
        descriptionElement.innerText = item.description;

        resultDiv.appendChild(titleElement);
        resultDiv.appendChild(descriptionElement);

        resultsContainer.appendChild(resultDiv);
    });
}

function displayPopup(index) {
    const popupModal = document.getElementById("popup-modal");
    const popupContent = document.getElementById("popup-content");
    const searchedResults = [
        { title: "Result 1", description: "This is the first search result." },
        { title: "Result 2", description: "This is the second search result." },
        { title: "Result 3", description: "This is the third search result." },
    ];

    const selectedResult = searchedResults[index];
    popupContent.innerHTML = `<h2>${selectedResult.title}</h2><p>${selectedResult.description}</p>`;
    popupModal.style.display = "block";
}

function closePopup() {
    const popupModal = document.getElementById("popup-modal");
    popupModal.style.display = "none";
}
