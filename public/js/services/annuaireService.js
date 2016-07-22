class annuaireService {

    constructor($http) {
        this.$http = $http;
    }

    create(data1, data2) {
        return this.$http.post('/api/annuaires', {
            nom: data1
            numero: data2
        })
    }

    getAll() {
        return this.$http.get('/api/annuaires')
    }

    getOne(id) {
        return this.$http.get('/api/annuaires/' + id)
    }

    update(id, data1, data2) {
        return this.$http.put('/api/annuaires/' + id, {
            nom: data1
            numero: data2
        })
    }

    delete(id) {
        return this.$http.delete('/api/annuaires/' + id)
    }

}