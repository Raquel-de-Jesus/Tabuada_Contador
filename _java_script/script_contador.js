function contar() {
	var ini = Number(document.getElementById("txti").value)
	var fim = Number(document.getElementById("txtf").value)
	var passo = Number(document.getElementById("txtp").value)
	var res = document.getElementById("res")
	var r = document.getElementById("r")

	if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
		//window.alert('Erro')
		res.innerHTML = 'Impossível contar!'
	} 
	else {
		//alert('Ok!')
		r.innerHTML = ''
		res.innerHTML = 'Contagem:<br>'

			if (passo <= 0) {
				res.innerHTML = 'Insira um número positivo'
			}
			else {
				if (ini < fim) {
					for (var x = ini; x <= fim; x+=passo) {
					res.innerHTML += x + '  |  '
				}
				}
				else {
					for (var x = ini; x >= fim; x-=passo) {
					res.innerHTML += x + '  |  '
				}
				}
				
			}
	}

}