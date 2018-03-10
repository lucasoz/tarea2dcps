import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var gente = [
      {
        nombre: 'Camila',
        esMujer: true,
        salario: '5000000',
      },
      {
        nombre: 'Carlos',
        esMujer: false,
        salario: '4500000',
      },
      {
        nombre: 'Lucas',
        esMujer: false,
        salario: '10000000',
      },
      {
        nombre: 'Juan',
        esMujer: false,
        salario: '35000000',
      },
      {
        nombre: 'Jennifer',
        esMujer: true,
        salario: '4000000',
      },
      {
        nombre: 'Carolina',
        esMujer: true,
        salario: '5000000',
      },
    ];
    var total = 0;
    gente.forEach(function(persona) {
      total = total + parseInt(persona.salario);
    });

    return{
        gente,
        total
    };
  },

});
