const somaCrush = (n1, n2) => n1 + n2;
const encontraCrush = nome => {
    try {
        validacao(nome)
        return 'Crush não encontrado';
    } catch (errorMessage) {
        return errorMessage;
    }
}

const validacao = nome => {
    if (!nome) throw 'Campo nome está vazio';
    if (typeof nome !== 'string') throw 'Tipo inválido';
}

module.exports = {
    somaCrush,
    encontraCrush
}