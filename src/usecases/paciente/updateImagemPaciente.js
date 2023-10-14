export default function makeUpdateImagem(gateway) {
    return async function updateImagem({headers, body}) {
        const response = await gateway.updateImagem(headers['codigo-paciente'], body);
        return response;
    }
}
