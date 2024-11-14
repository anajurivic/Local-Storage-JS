let alunos = [];
 
function cadastrarAluno() {
    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const ano = document.getElementById('ano').value;
    if (nome && curso && ano) {
        const aluno = { nome, curso, ano };
        alunos.push(aluno);
        alert('Aluno cadastrado com sucesso!');
        document.getElementById('nome').value = '';
        document.getElementById('curso').value = '';
        document.getElementById('ano').value = '';
    } else {
        alert("Preencha todos os campos.");
    }
}
 
function mostrarTodosAlunos() {
    const listaAlunos = document.getElementById('alunos-list');
    listaAlunos.innerHTML = ''; 
    if (alunos.length === 0) {
        listaAlunos.innerHTML = 'Nenhum aluno cadastrado.';
    } else {
        alunos.forEach((aluno) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${aluno.nome}</span> - ${aluno.curso} - ${aluno.ano}`;
            listaAlunos.appendChild(li);
        });
    }
}
 
function mostrarAlunoEspecifico() {
    const nomeBuscado = prompt("Digite o nome do aluno:");
    const aluno = alunos.find(a => a.nome.toLowerCase() === nomeBuscado.toLowerCase());
    const alunoEspecifico = document.getElementById('aluno-especifico');
    if (aluno) {
        alunoEspecifico.innerHTML = `Nome: ${aluno.nome}<br>Curso: ${aluno.curso}<br>Ano de Conclusão: ${aluno.ano}`;
    } else {
        alunoEspecifico.innerHTML = 'Aluno não encontrado.';
    }
}
 

function atualizarAluno() {
    const nomeBuscado = prompt("Digite o nome do aluno para atualizar:");
    const aluno = alunos.find(a => a.nome.toLowerCase() === nomeBuscado.toLowerCase());
    if (aluno) {
        const novoNome = prompt("Novo nome:", aluno.nome);
        const novoCurso = prompt("Novo curso:", aluno.curso);
        const novoAno = prompt("Novo ano de conclusão:", aluno.ano);
        aluno.nome = novoNome || aluno.nome;
        aluno.curso = novoCurso || aluno.curso
        aluno.ano = novoAno || aluno.ano;
        alert("Dados atualizados com sucesso!");
    } else {
        alert("Aluno não encontrado.");
    }
}
 
function removerAluno() {
    const nomeBuscado = prompt("Digite o nome do aluno para remover:");
    const alunoIndex = alunos.findIndex(a => a.nome.toLowerCase() === nomeBuscado.toLowerCase());
    if (alunoIndex !== -1) {
        alunos.splice(alunoIndex, 1);
        alert("Aluno removido com sucesso!");
    } else {
        alert("Aluno não encontrado.");
    }
}

 