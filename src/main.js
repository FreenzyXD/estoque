document.addEventListener('DOMContentLoaded', function () {
    const formProduto = document.getElementById('form-produto');
    const listaProdutos = document.getElementById('lista-produtos');
    const modelosPorMarca = {
        scania: ["113","T 112 HW", "124", "143","142",  " L 111"," LK 140", "T 124","Linha R", "Linha S", "Linha V8" ],
        volvo: ["FH", "FM", "FL"],
        volkswagen: ["Delivery", "Constellation", "Worker"],
        mercedes: ["Axor", "Actros", "Atego"],
        ford: ["Cargo", "Fiesta", "EcoSport"]
    };
    const marcaSelect = document.getElementById('marca');
    const modeloSelect = document.getElementById('modelo');
    
    marcaSelect.addEventListener('change', function () {
        const marcaSelecionada = this.value;
        const modelos = modelosPorMarca[marcaSelecionada];

        // Limpa as opções existentes
        modeloSelect.innerHTML = '<option value="" disabled selected>Selecione um modelo</option>';

        // Adiciona as novas opções baseadas na marca selecionada
        modelos.forEach(function (modelo) {
            const option = document.createElement('option');
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });
    });

    formProduto.addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeProdutoInput = document.getElementById('nome-produto');
        const quantidadeProdutoInput = document.getElementById('quantidade-produto');
        const marcaProdutoInput = document.getElementById('marca');
        const precoCompraInput = document.getElementById('compra');

        const nomeProduto = nomeProdutoInput.value.trim();
        const quantidadeProduto = parseInt(quantidadeProdutoInput.value.trim());
        const marca = marcaProdutoInput.value.trim();
        const compra = parseFloat(precoCompraInput.value.trim());
        
        if (nomeProduto === '' || isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
            alert('Por favor, insira um nome de produto válido e uma quantidade maior que zero.');
            return;
        }

        const precoCompraFormatado = `R$ ${compra.toFixed(2)}`;
        const modeloSelecionado = document.getElementById('modelo').value;
        const itemProduto = document.createElement('li');
        itemProduto.textContent = `${nomeProduto} - ${quantidadeProduto} unidades - ${marca} - ${precoCompraFormatado} - ${modeloSelecionado}`;
        listaProdutos.appendChild(itemProduto);
            
        // Limpar os campos do formulário
        nomeProdutoInput.value = '';
        quantidadeProdutoInput.value = '';
        marcaProdutoInput.value = '';
        precoCompraInput.value = '';
    });
});