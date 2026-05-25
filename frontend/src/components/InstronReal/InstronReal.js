import { ref, onMounted } from 'vue';
import { getInstronRealResults } from '../../services/instronRealService';

export default function useInstronReal() {
  const tabela = ref(null);

  const loading = ref(false);

  const erro = ref('');

  async function carregarResultados() {
    try {
      loading.value = true;

      erro.value = '';

      const dados = await getInstronRealResults();

      if (dados.length > 0) {
        const tabelasConvertidas = dados.map(resultado =>
          JSON.parse(resultado.result_json)
        );

        const cabecalho = tabelasConvertidas[0].data[0];

        const linhas = tabelasConvertidas.flatMap(tabela =>
          tabela.data.slice(1)
        );

        tabela.value = {
          data: [
            cabecalho,
            ...linhas
          ]
        };
      }

    } catch (error) {

      erro.value = 'Erro ao carregar resultados.';

      console.error(error);

    } finally {

      loading.value = false;
    }
  }

  onMounted(() => {
    carregarResultados();
  });

  return {
    tabela,
    loading,
    erro
  };
}
