async function consultarMedSemestre() {
    const nome = document.getElementById("searchInput").value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    try {
        // Substitua pela URL da sua API no PythonAnywhere
        const response = await fetch(`https:// carloshjr.pythonanywhere.com/api/med_semestre`);
        const alunos = await response.json();
        
        // Filtrando aluno pelo nome
        const aluno = alunos.find(a => a.nome.toLowerCase().includes(nome.toLowerCase()));

        const resultDiv = document.getElementById("result");

        if (aluno) {
            resultDiv.innerHTML = `
                <p><strong>Nome:</strong> ${aluno.nome}</p>
                <p><strong>Média do Semestre:</strong> ${aluno.med_semestre}</p>
            `;
        } else {
            resultDiv.innerHTML = "<p>Aluno não encontrado.</p>";
        }
    } catch (error) {
        console.error("Erro ao consultar a API:", error);
        alert("Erro ao consultar a API. Tente novamente mais tarde.");
    }
}
