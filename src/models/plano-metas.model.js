class PlanoMetas {
    constructor(
        id,
        data,
        metas
    ) {
        this.id = id;
        this.data = data;
        this.metas = metas;
    }

    static mapRequestToPlanoMetas(req) {
        return new PlanoMetas(req.id, req.data, req.metas);
    }

    static mapResponseToPlanoMetas(res) {
        return new PlanoMetas(res.id, res.data, res.metas);
    }
}

export default PlanoMetas;