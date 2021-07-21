fetch("https://cataas.com/api/cats")
  .then((response) => {
    return response.json();
  })
  .then((catindex) => manyCats(catindex));

  function manyCats(catindex) {
    const catList = document.createElement("div");
    catList.className = "cat-list";
    catindex.forEach((catindex) => {
      const catContainer = document.createElement("div");
      catContainer.className = "cat-container";
      catContainer.getAttribute="onclcick"
      catContainer.innerHTML = `
      <div>
      <img class ="cat-image" src="https://cataas.com/cat/${catindex.id}">
        <h3 class="cat-id">The id of this cat is ${catindex.id}</h3>
        <p class="cat-time">This cat's profile was created on ${new Date(catindex.created_at).toDateString()}</p>
        <p class="cat-tags">This cat is famous for ${catindex.tags}</p>
      </div>
      `;
      
      catList.append(catContainer);
    });
    document.body.append(catList);
  }
  
  
  
