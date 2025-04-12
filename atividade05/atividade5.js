
const alunosJsonString = `[
  { "nome": "Maria Joaquinha", "notas": [8, 7.5, 9], "curso": "Sistemas para Internet" },
  { "nome": "João Ricardo", "notas": [8, 8.5, 5], "curso": "Direito" },
  { "nome": "José Henrique", "notas": [4, 10, 7], "curso": "Administração" },
  { "nome": "Pedro da Silva", "notas": [6, 7.6, 7.5], "curso": "Sistemas para Internet" },
  { "nome": "Silvana Morais", "notas": [6, 7.5, 9.5], "curso": "Sistemas de Informação" },
  { "nome": "Patricia Castro", "notas": [1, 9, 10], "curso": "Arquitetura" },
  { "nome": "Joana Ribeiro", "notas": [8, 9, 9], "curso": "Contabilidade" },
  { "nome": "Rafael Rocha", "notas": [4, 4, 9], "curso": "Sistemas para Internet" },
  { "nome": "Gustavo Henrique", "notas": [8, 7.5, 5], "curso": "Sistemas para Internet" }
]`;

const alunos = JSON.parse(alunosJsonString);

alunos.forEach((aluno, index) => {
  console.log(`aluno ${index + 1}`);
  console.log(`nome: ${aluno.nome}`);
  console.log(`notas ${aluno.notas.join(', ')}`)
  console.log(`curso: ${aluno.curso}`)
  console.log("--------------------")
  
});


function calcular_media(notas) {
  let soma = notas.reduce((acumulador, nota) => acumulador +nota, 0);
  return soma / notas.length;
}

function mostrarAprovados(alunosLista) {
  console.log("alunos aprovados com média 7 ou mais!\n");

  alunosLista.forEach((aluno) => {
    const media = calcular_media(aluno.notas);
    if (media >= 7) {
      console.log(`nome: ${aluno.nome}`);
      console.log(`notas ${aluno.notas.join(', ')}`)
      console.log(`curso: ${aluno.curso}`)
      console.log("=======================")
    }
  });
}

mostrarAprovados(alunos);