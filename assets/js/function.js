const menu = document.getElementById("menu-dimension");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-itens");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("input-location");
const addressWarn = document.getElementById("address-warn");
const projectBody = document.getElementById("project-body");



let cart = [];


// Evento para abrir o modal do carrinho
cartBtn.addEventListener("click",function(){
    updateCartModal();
   cartModal.style.display = "block";
});

// evento para quando clicar em qualquer lugar do body, fechar o modal

projectBody.addEventListener("click",function() {
 cartModal.style.display = "none";
});

// evento para quando clicar dentro do modal, ele não fechar
cartModal.addEventListener("click",function(e){
   e.stopPropagation();
});

// evento para aperta no botão para fechar o modal

closeModalBtn.addEventListener("click", function(){
   cartModal.style.display = "none";
});


// Função para adicionar item ao carrinho

menu.addEventListener("click",function(event){
  //console.log(event.target);

  let parentButton = event.target.closest(".add-to-cart-btn");
 // console.log(parentButton);

 // pegando os atributos de nome e preço do botão
 if(parentButton) {
    const name = parentButton.getAttribute("data-name");
    const price = parseFloat( parentButton.getAttribute("data-price")); 

    // adicionar no carrinho.
   
     addToCart(name,price);
 
 }
});


// Função para adicionar no carrinho

function addToCart(name, price) {
    //alert("O item é:" + name);
   // alert("O preço é " + price);

  const existingItem = cart.find(item => item.name === name);

  if(existingItem) {
     // Se o item já existe aumenta apeas a quantidade + 1
     //console.log(existingItem);

     existingItem.quantity += 1;
     
     
  } else {
         
    cart.push({
      name,
      price,
      quantity:1,
   });

  }

  
   updateCartModal();

}


// Atualiza carrinho

function updateCartModal() {

     //Zerando os itens do carrinho
     cartItemsContainer.innerHTML = "";

     //Criando uma variável para armazenar o total
     let total = 0;

     //Inserindo dentro do carrinho todos os itens

     cart.forEach(item => {
           //console.log(item)

           const cartItemElement = document.createElement("div")

           cartItemElement.innerHTML = `
           
               <div class="space-modal">
                    <div>
                            <p class="title-item"> ${item.name}</p>
                            <p class="quantity-itens "> QUANTIDADE: ${item.quantity}</p>
                            <p class="price-itens"> R$ ${item.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <button class="btn-remove" data-name="${item.name}">
                           Remover
                      </button>
                    </div>
               </div>
           
           `;

           total += item.price * item.quantity;

           cartItemsContainer.appendChild(cartItemElement);
     });


     cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
     });


 cartCounter.innerHTML = cart.length;

}

// Função para remover item do carrinho


cartItemsContainer.addEventListener("click",function(event){

    if(event.target.classList.contains("btn-remove")) {
       const name = event.target.getAttribute("data-name");

       removeItemCart(name);
    }
});

function removeItemCart(name) {
  const index = cart.findIndex(item => item.name === name);

  if(index !== -1 ) {
    const item = cart[index];

    if(item.quantity > 1) {
      item.quantity -= 1;
      updateCartModal();
      return;
    } 

    cart.splice(index,1);

    updateCartModal();


    //console.log(item);
  }
}


addressInput.addEventListener("input",function(event){
   let inputValue = event.target.value;

   if(inputValue !== "") {
      addressInput.style.border = "1px solid #9E9E9E"
      addressWarn.style.display = "none"
   }
});

// Finalizar pedido
checkoutBtn.addEventListener("click",function(){

   const isOpen = checkRestaurantOpen();
 if (!isOpen) {
   
   Toastify({
      text: "Ops o restaurante está fechado!",
  duration: 3000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#eb2d2d",
  },
   }).showToast();

   return;
 }



  if(cart.length === 0) return;

  if(addressInput.value === "") {
    addressWarn.style.display ="block";
    addressInput.style.border = "1px solid #eb2d2d";
  }

  //console.log(cart);

  const cartItem = cart.map((item) => {
       return (
         `${item.name} Quantidade: ${item.quantity} Preço: R$${item.price} |`
       )
  }).join("");

  const message = encodeURIComponent(cartItem);
  const phone = "24992630568"

  window.open(`https://wa.me/${phone}?text=${message} Endereço: ${addressInput.value}`, "_blank")
  
  cart.length = 0;
  updateCartModal();
});

// verificar a hora e manipular o card horario 

function checkRestaurantOpen() {
   const data = new Date();
   const hora = data.getHours();
   return hora >= 18 && hora < 22; //true | Restaurante está aberto
}

const spanItem = document.getElementById("date-span");
const isOpen = checkRestaurantOpen();

if(isOpen) {
   spanItem.style.background = "#43C251";
} else {
   spanItem.style.background = "#eb2d2d";
}