<script>
import TimesApi from "@/api/times.js";
const timesApi = new TimesApi();
export default {
  data() {
    return {
      time: {},
      times: [],
    };
  },
  async created() {
    this.times = await timesApi.buscarTodosOsTimes();
  },
  methods: {
    async salvar() {
      if (this.time.id) {
        await timesApi.atualizarTime(this.time);
      } else {
        await timesApi.adicionarTime(this.time);
      }
      this.times = await timesApi.buscarTodosOsTimes();
      this.time = {};
    },
    async excluir(time) {
      await timesApi.excluirTime(time.id);
      this.times = await timesApi.buscarTodosOsTimes();
    },
    editar(time) {
      Object.assign(this.time, time);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de times</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="time.nome" @keyup.enter="salvar" />
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
          <tr v-for="time in times" :key="time.id">
            <td>{{ time.id }}</td>
            <td>{{ time.nome }}</td>
            <td>
              <button @click="editar(time)">Editar</button>
              <button @click="excluir(time)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
