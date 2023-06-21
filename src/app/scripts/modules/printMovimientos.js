const printMovimientos = (movements, container) => {
    container.innerHTML = "";
    movements.forEach((element, index) => {
      container.innerHTML += `
          <tr class ="table__tr">
              <td class ="table__td">${index + 1}</td>
              <td class ="table__td">${element.description}</td>
              <td class ="table__td">${element.price}</td>
              <td class ="table__td">${element.type}</td>
              <td class ="table__td"><span class="material-symbols-outlined button--delete" data-id=${
                element.id
              }>
  close
  </span><span class="material-symbols-outlined button--edit" data-id=${
        element.id
      }>
  edit
  </span></td>
          </tr>
          `;
    });
  };
  
  export default printMovimientos;