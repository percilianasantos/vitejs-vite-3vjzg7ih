export default function Sobre() {
  return (
    <section id="sobre" style={{padding: '40px 20px', textAlign: 'center', backgroundColor: '#1a1a1a'}}>
      <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Sobre Mim</h2>
      
      <img 
        src="https://github.com/percilianasantos.png" 
        alt="Minha foto" 
        style={{
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          objectFit: 'cover',
          marginBottom: '20px',
          border: '3px solid #646cff'
        }} 
      />

      <p style={{maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'}}>
        Sou estudante de desenvolvimento web, apaixonada por tecnologia e design. 
        Estou sempre buscando aprender novas ferramentas e criar projetos que 
        resolvam problemas reais.
      </p>
    </section>
  )
}