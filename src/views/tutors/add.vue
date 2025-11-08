<template>
<<<<<<< HEAD
  <div>
    <h2 class="text-xl font-semibold mb-4">Nova Obra</h2>
    <form @submit.prevent="salvar" class="space-y-3">
      <div>
        <label>Altura (m)</label>
        <input v-model.number="altura" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Largura (m)</label>
        <input v-model.number="largura" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Comprimento (m)</label>
        <input v-model.number="comprimento" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Tipo</label>
        <select v-model="tipo" class="input">
          <option value="tijolo">Tijolo</option>
          <option value="concreto">Concreto</option>
          <option value="madeira">Madeira</option>
        </select>
      </div>

      <button class="btn" type="submit">Calcular e Salvar</button>
    </form>
  </div>
=======
<<<<<<< HEAD
  <div class="w-full">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
      <legend class="fieldset-legend">Adicionando tutores</legend>

      <label class="label">Nome</label>
      <input
        type="text"
        class="input w-full"
        placeholder="Nome completo"
        v-model="form.nomeCompleto"
      />

      <label class="label">Logradouro</label>
      <input type="text" class="input w-full" placeholder="Logradouro" v-model="form.logradouro" />

      <label class="label">Número</label>
      <input type="text" class="input w-full" placeholder="Número" v-model="form.numero" />

      <label class="label">Bairro</label>
      <input type="text" class="input w-full" placeholder="Bairro" v-model="form.bairro" />

      <label class="label">CEP</label>
      <input type="text" class="input w-full" placeholder="CEP" v-model="form.cep" />

      <label class="label">Complemento</label>
      <input
        type="text"
        class="input w-full"
        placeholder="Complemento"
        v-model="form.complemento"
      />

      <label class="label">Cidade</label>
      <input type="text" class="input w-full" placeholder="Cidade" v-model="form.cidade" />

      <label class="label">Estado</label>
      <input type="text" class="input w-full" placeholder="Estado" v-model="form.estado" />

      <button class="btn btn-neutral mt-4" @click="adicionarTutor">Adicionar</button>
    </fieldset>
    <div class="toast" v-if="toastVisible">
      <div class="alert alert-info">
        <span
          ><strong>{{ nomeCompletoToast }}</strong> salvo com sucesso.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import Localbase from "localbase";

let db;
onMounted(() => {
  db = new Localbase("db");
});

const toastVisible = ref(false);
const nomeCompletoToast = ref("");
const form = reactive({
  nomeCompleto: "",
  logradouro: "",
  numero: "",
  bairro: "",
  cep: "",
  complemento: "",
  cidade: "",
  estado: "",
});

const adicionarTutor = async () => {
  try {
    await db.collection("tutores").add({
      nome: form.nomeCompleto,
      endereco: {
        logradouro: form.logradouro,
        numero: form.numero,
        bairro: form.bairro,
        cep: form.cep,
        complemento: form.complemento,
        cidade: form.cidade,
        estado: form.estado,
      },
      telefones: [],
    });
    console.log("Tutor adicionado com sucesso!");
    nomeCompletoToast.value = form.nomeCompleto;
    toastVisible.value = true;
  } catch (error) {
    console.error("Erro ao adicionar tutor:", error);
  } finally {
    // Limpar o formulário após a adição
    form.nomeCompleto = "";
    form.logradouro = "";
    form.numero = "";
    form.bairro = "";
    form.cep = "";
    form.complemento = "";
    form.cidade = "";
    form.estado = "";
  }
};
</script>

  <div>add edit.html</div>
>>>>>>> 80e84edcc721443ed1dcaf33e48e42b2431bcbe8
</template>

<script setup>
import { ref } from 'vue'
import ObraController from '../../controllers/ObraController'
import { useRouter } from 'vue-router'

<<<<<<< HEAD
const altura = ref(2.7)
const largura = ref(5)
const comprimento = ref(6)
const tipo = ref('tijolo')
const router = useRouter()

function salvar() {
  const obra = ObraController.salvar({
    altura: altura.value,
    largura: largura.value,
    comprimento: comprimento.value,
    tipo: tipo.value
  })
  alert(`Obra salva! Custo estimado: R$ ${obra.custo}`)
  router.push('/obras')
}
</script>
<style scoped> </style>
=======

<style lang="scss" scoped></style>
>>>>>>> 80e84edcc721443ed1dcaf33e48e42b2431bcbe8
