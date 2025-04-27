function calcular(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var resultado=document.getElementById('resultado')
    var seletor=(document.getElementById('seletor').value)
    

  
switch (seletor) {
    case'+':
    var s=n1+n2
    resultado.innerHTML='o resultado da operação é,'+s
    resultado.style.margin='auto'
    resultado.style.background='black'
    resultado.style.width='30%'
    resultado.style.fontSize='20px'
    resultado.style.color='white'
    break
    case'-':
    var s=n1-n2
    resultado.innerHTML='o resultado da operação é,'+s
    resultado.style.margin='auto'
    resultado.style.background='black'
    resultado.style.width='30%'
    resultado.style.fontSize='20px'
    resultado.style.color='white'
    break
    case'*':
    var s=n1*n2
    resultado.innerHTML='o resultado da operação é,'+s
    resultado.style.margin='auto'
    resultado.style.background='black'
    resultado.style.width='30%'
    resultado.style.fontSize='20px'
    resultado.style.color='white'
    break
    case'/':
    var s=n1/n2
    resultado.innerHTML='o resultado da operação é,'+s
    resultado.style.margin='auto'
    resultado.style.background='black'
    resultado.style.width='30%'
    resultado.style.fontSize='20px'
    resultado.style.color='white'
    break


}



}
