var api = {};


api.listaGrupos = function(req, res) {

    res.json([
        {
            _id: 1, 
            nome: 'esporte'
        }, 
        { 
            _id: 2, 
            nome: 'lugares', 
        }, 
        { 
            _id: 3, 
            nome: 'animais'
        },
        { 
            _id: 4, 
            nome: 'comidas'
        },
        { 
            _id: 5, 
            nome: 'pessoas'
        }
    ]);
        
};


module.exports = api;