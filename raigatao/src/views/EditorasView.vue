<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodosAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditoras(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodosAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluireditora(editora.id);
      this.editoras = await editorasApi.buscarTodosAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Editoras</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="editora.publishers" @keyup.enter="salvar" />
      <button @click="salvar">Adicionar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.description }}</td>
            <td>
              <button @click="editar(editora)">Editar</button>
              <button @click="excluir(editora)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
div.container {
  margin-left: 42%;
  margin-top: 2%;
}

h2 {
  font-weight: bolder;
}

div.form-input {
  margin-top: 1%;
}

div.list-items {
  margin-top: 10%;
}

tr th {
  background-color: #475d9b;
  border-radius: 15%;
}

tr:nth-child(even) {
  background: #8ba4e9;
}

tr button {
  display: flex;
  border-radius: 25%;
  background-color: azure;
}

tr button:hover {
  background-color: #8ba4e9;
}
</style>
