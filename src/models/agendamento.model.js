import moment from "moment-timezone";

class Agendamento {
    constructor(
        data,
        hora
    ) {
        this.data = data;
        this.hora = hora;
    }

    static mapResponseToAgendamento(res) {
        const hora = res.hora.split(":");
        const data = moment(res.data, "Y-M-D").format("D [de] MMMM");
        return new Agendamento(data, `${hora[0]}h${hora[1]}`);
    }
}

export default Agendamento;