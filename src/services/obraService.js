export default {
    calcularMateriais(obra) {
        const area = obra.largura * obra.cumprimento
        const volume = area * obra.altura

        let custoBase = 0
        let materiais = []

        switch (obra.tipo) {
            case 'tijolo':
                custoBase = 250
                materiais = ['tijolos', 'cimento', 'areia']
                break
            case 'concreto':
                custoBase = 400
                materiais = ['concreto', 'brita', 'areia grossa']
                break
            case 'madeira':
                custoBase = 300
                materiais = ['madeira tratada', 'parafusos', 'verniz']
                break
        }
        obra.custo = custoBase * volume
        obra.materiais = materiais
        return obra
    }
}