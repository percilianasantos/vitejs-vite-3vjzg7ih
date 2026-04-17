// Array com seus projetos
const meusProjetos = [
  {
    id: 1,
    nome: "Portfólio HTML/CSS",
    descricao: "Meu primeiro portfólio usando HTML e CSS puro",
    link: "https://github.com/percilianasantos/portfolio"
  },
  {
    id: 2,
    nome: "Portfólio React + TypeScript", 
    descricao: "Migração do portfólio para React com TypeScript",
    link: "#"
  },
  {
    id: 3,
    nome: "Projeto Futuro com API",
    descricao: "Próximo projeto consumindo API externa",
    link: "#"
  }
]

export function Projetos() {
  return (
    <section style={{padding: '20px'}}>
      <h2>Meus Projetos</h2>
      {/* Renderização dinâmica usando .map() */}
      {meusProjetos.map((projeto) => (
        <div key={projeto.id} style={{border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px'}}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
          <a href={projeto.link} target="_blank">Ver projeto</a>
        </div>
      ))}
    </section>
  )
}