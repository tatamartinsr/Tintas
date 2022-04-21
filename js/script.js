const nome = document.getElementById("nome")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const alt = document.getElementById("alt")
const comp = document.getElementById("comp")
const lata = document.getElementById("lata")
const btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
    let precoTotal = Number()
    let resul = Number()
    let preco = Number()
    let n = nome.value
    let e = email.value
    let t = tel.value
    let a = Number(alt.value)
    let c = Number(comp.value)
    let l = lata.value
    let m2 = (a*c)
    
    if(document.getElementById("s").checked){
       
        var area = Number(prompt("a área do objeto"))
        m2 -= area
    }
    if(l ==1){
        preco = 40
        resul = Math.ceil(m2/25)
        precoTotal = preco*resul
    }else if(l == 3.6){
        preco = 100
        resul = Math.ceil(m2/100)
        precoTotal = preco*resul
    }else if(l == 18){
        preco = 280
        resul = Math.ceil(m2/350)
        precoTotal =preco*resul
    }
    alert("Nome: " +n +"\n"+ "E-mail: "+e + "\n" + "Telefone: "+t + "\n" + "lata de: "+l+ "L\nValor da lata: " +preco + "R$" +"\n" + "quantidade de latas: " + resul + "\n" + "valor Total: " + precoTotal + "R$")

})