const totalAPagar = document.querySelector("#totalAPagar");
const subTotal = document.querySelector("#subTotal");
const cantidad = document.querySelector("#cantProd");
const nCantidad = document.querySelector("#cantidadCarrito");
let cont = 0;
let precio = 1799.99;

const allquantity = document.querySelectorAll("#quantity");

console.log(allquantity.values);

const addquantity = (quantityid) => {
  const quantity = document.getElementById(quantityid);
  const total = document.getElementById(`${quantityid}Total`);
  quantity.value = Number(quantity.value) + 1;
  if (quantity.value > 0) {
    cont++;
    const totalPrecio = precio * Number(quantity.value);
    total.textContent = `$ ${totalPrecio.toFixed(2)}`;
    totalAPagar.textContent = `$ ${totalPrecio.toFixed(2)}`;
    subTotal.textContent = `$ ${totalPrecio.toFixed(2)}`;
    cantidad.textContent = cont;
    nCantidad.textContent = cont;
  }
  console.log("Total actualizado: " + total.textContent);
  console.log("Total : " + totalAPagar.textContent);
};

const subtractquantity = (quantityid) => {
  const quantity = document.getElementById(quantityid);
  const total = document.getElementById(`${quantityid}Total`);
  if (quantity.value > 0) {
    quantity.value = Number(quantity.value) - 1;
    cont--;
    const totalPrecio = precio * Number(quantity.value);
    total.textContent = `$ ${totalPrecio.toFixed(2)}`;
    totalAPagar.textContent = `$ ${totalPrecio.toFixed(2)}`;
    subTotal.textContent = `$ ${totalPrecio.toFixed(2)}`;
    cantidad.textContent = cont;
    nCantidad.textContent = cont;
  }

  console.log("Total actualizado: " + total.textContent);
};

const btnPagar = document.querySelector("#btnPagar");

btnPagar.addEventListener("click", () => {
  alert(
    `gracias por la compra de ${cont} productos su pago fue de ${totalAPagar.textContent}`
  );
});
