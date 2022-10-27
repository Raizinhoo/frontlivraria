import axios from "axios";
export default class CategoriasApi {
  async buscarTodosAsCategorias() {
    const response = await axios.get(
      `https://raizera.herokuapp.com/categories`
    );
    return response.data;
  }

  async buscarCategorias(id) {
    const response = await axios.get(
      `https://raizera.herokuapp.com/categories/${id}`
    );
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post(
      `https://raizera.herokuapp.com/categories`,
      categoria
    );
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://raizera.herokuapp.com/categories/${id}`
    );
    response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(
      `https://raizera.herokuapp.com/categories/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
