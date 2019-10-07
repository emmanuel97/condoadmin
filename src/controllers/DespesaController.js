const mongoose = require('mongoose');

//instancia da tabela desejada
const Despesa = mongoose.model('Despesa');


module.exports = {
    async index(req,res){
        //paginate
        const {page = 1}= req.query;
        const despesas = await Despesa.paginate({},{page, limit:10});

        return res.json(despesas);
    },

    async store(req,res){
        const despesa = await Despesa.create(req.body);

        return res.json(despesa);
    },
    
    async show(req,res){
        const despesa = await Despesa.findById(req.params.id);
                   
        return res.json(despesa);
    },

    async update(req,res){
        const despesa = await Despesa.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(despesa);
    },

    async destroy(req,res){
        await Despesa.findByIdAndRemove(req.params.id);
        
        return res.send();
    },
}