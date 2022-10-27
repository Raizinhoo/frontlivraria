import axios from "axios";
export default class EditorasApi {
  async buscarTodosAsEditoras() {
    const response = await axios.get(
      `https://raizera.herokuapp.com/publishers`
    );
    return response.data;
  }

  async buscarCategorias(id) {
    const response = await axios.get(
      `https://raizera.herokuapp.com/publishers/${id}`
    );
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post(
      `https://raizera.herokuapp.com/publishers`,
      editora
    );
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(
      `https://raizera.herokuapp.com/publishers/${id}`
    );
    response.data;
  }

  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://raizera.herokuapp.com/publishers/${editora.id}`,
      editora
    );
    return response.data;
  }
}
