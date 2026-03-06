let total = 0
let pedido = []
let pedidosHoje = 0


function addPedido(nome, preco){

pedido.push({nome:nome, preco:preco})

total += preco

pedidosHoje++

document.getElementById("contador").innerHTML =
"Pedidos hoje: " + pedidosHoje

atualizarCarrinho()

}


function atualizarCarrinho(){

let lista = document.getElementById("listaPedido")

lista.innerHTML = ""

pedido.forEach(function(item, index){

let li = document.createElement("li")

li.innerHTML =
item.nome +
" - R$" + item.preco +
" <button onclick='removerItem("+index+")'>❌</button>"

lista.appendChild(li)

})

document.getElementById("total").textContent =
"Total: R$" + total

}


function removerItem(index){

total -= pedido[index].preco

pedido.splice(index,1)

atualizarCarrinho()

}


function enviarPedido(){

let nome = document.getElementById("nome").value
let endereco = document.getElementById("endereco").value
let pagamento = document.getElementById("pagamento").value

let mensagem = "🍟 NOVO PEDIDO%0A%0A"

mensagem += "Cliente: " + nome + "%0A"
mensagem += "Endereço: " + endereco + "%0A"
mensagem += "Pagamento: " + pagamento + "%0A%0A"

pedido.forEach(function(item){
mensagem += "- " + item.nome + "%0A"
})

mensagem += "%0ATotal: R$" + total

let telefone = "5511942038103"

let url = "https://wa.me/" + telefone + "?text=" + mensagem

window.open(url)

}