import ObraRepository from '@/repositories/ObraRepository';
import Obra from '@/models/Obra';

class ObraService {
  async getAll() {
    return ObraRepository.getAll();
  }

  async getById(id) {
    return ObraRepository.findById(id);
  }

  async create(data) {
    const obra = new Obra(
      null,
      data.nome,
      data.endereco,
      data.dataInicio,
      parseFloat(data.orcamento),
      data.status
    );
    return ObraRepository.add(obra);
  }

  async update(id, data) {
    const obra = new Obra(
      id,
      data.nome,
      data.endereco,
      data.dataInicio,
      parseFloat(data.orcamento),
      data.status
    );
    return ObraRepository.update(id, obra);
  }

  async delete(id) {
    ObraRepository.delete(id);
  }
}

export default new ObraService();