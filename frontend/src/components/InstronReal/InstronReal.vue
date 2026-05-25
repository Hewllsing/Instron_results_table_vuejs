<template>
    <div class="instron-container">

        <h1>Resultados Instron</h1>

        <div v-if="loading" class="loading">
            Carregando resultados...
        </div>

        <div v-if="erro" class="erro">
            {{ erro }}
        </div>

        <table
            v-if="tabela"
            class="results-table"
        >
            <thead>
                <tr>
                    <th
                        v-for="(header, index) in tabela.data[0]"
                        :key="index"
                    >
                        {{ header }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="(linha, linhaIndex) in tabela.data.slice(1)"
                    :key="linhaIndex"
                >
                    <td
                        v-for="(coluna, colunaIndex) in linha"
                        :key="colunaIndex"
                    >
                        {{ coluna }}
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import useInstronReal from './InstronReal';

const {
    tabela,
    loading,
    erro
} = useInstronReal();
</script>

<style src="./InstronReal.css"></style>
