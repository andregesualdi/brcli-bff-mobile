export default function makeGetPaciente(gateway) {
    return async function getPaciente({headers}) {
        return await gateway.recuperarDadosPaciente(headers['codigo-paciente']);
    }
}
