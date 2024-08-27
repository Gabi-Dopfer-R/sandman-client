import React, { useState, useEffect } from 'react';
import '../../assets/css/DadosListLaudo.css';

export default function GerarLaudo() {
  const [nomePaciente, setNomePaciente] = useState('');
  const [nomeAnalista, setNomeAnalista] = useState('');
  const [motivoExame, setMotivoExame] = useState('');
  const [comentario, setComentario] = useState('');
  const [graficos, setGraficos] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      const pacienteSimulado = "Nome PACIENTE"; //simulação
      const analistaSimulado = "Nome do analista";
      const motivoSimulado = "aqui fica o motivo escrito";
      const graficosSimulados = [
        { id: 1, src: 'grafico1.png' },
        { id: 2, src: 'grafico2.png' },
        { id: 3, src: 'grafico3.png' },
        { id: 4, src: 'grafico4.png' },
      ];

      setNomePaciente(pacienteSimulado);
      setNomeAnalista(analistaSimulado);
      setMotivoExame(motivoSimulado);
      setGraficos(graficosSimulados);
    };

    fetchDados();
  }, []);

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };


  const handleEnviar = () => {
    alert('Laudo enviado para o paciente!');
  };

  return (
    <div id="wrapper-4" className="content-center-4">
      <footer id="footer-4">
        <div className="inner-4">
          <h2>Laudo</h2>
          
          <div className="dados-paciente-analista">
            <p><strong>Paciente:</strong> {nomePaciente}</p>
            <p><strong>Analista:</strong> {nomeAnalista}</p>
          </div>

          {/* Campos para exibição dos gráficos */}
          <div className="graficos-exame">
            {graficos.map(grafico => (
              <img key={grafico.id} src={grafico.src} alt={`Gráfico ${grafico.id}`} className="grafico-img" />
            ))}
          </div>

          <div className="motivo-exame">
            <h4><strong>Motivo do Exame:</strong></h4>
            <p>{motivoExame}</p>
          </div>

          <div className="comentario-analista">
            <h4><strong>Comentário do Analista:</strong></h4>
            <textarea 
              className="input-field-4" 
              value={comentario} 
              onChange={handleComentarioChange}
              placeholder="Adicione um comentário..."
            />
          </div>

          <div className="acoes-laudo">
           
            <button className="primary button-4" onClick={handleEnviar}>Enviar para o Paciente</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
