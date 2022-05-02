// url
const url = "src/data.json";
const table = document.querySelector("#tbody");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.forEach((item) => {
      // console.log(item);
      if (item.id <= 100) {
        // console.log(item);
        table.innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.first_name}</td>
          <td>${item.last_name}</td>
        </tr>
        `;
      }
    });
  })
  .catch((error) => console.log("cannot get data"));
