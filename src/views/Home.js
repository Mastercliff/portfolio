import { Component } from 'react';
import '../styles/views/Home.scss';
import {FiPenTool} from 'react-icons/fi';
import CodeCard from '../components/shared-components/CodeCard';


class Home extends Component{
    render(){
        return (
            <div className="home">
                <h2> 
                    <span className="hashtag"># </span>
                    Bem vindo(a) ao meu portfólio, fique a vontade
                </h2>

                <CodeCard/>
                
                <div className="flex-row"> 
                    <img src="icons/drawing.png" alt="creativity" height="220px" />
                    <div className="body-card ml-4">
                    <h2>
                            # Apresentação
                    </h2>
                       <span className="text-content">
                        Olá, me chamo Elias Garrido, sou programador tem 3 anos, 
                        comecei a programar em 2019 com as linguagens <strong>C</strong> e <strong>Python</strong>, criando programas
                        e desenvolvendo algumas aplicações de terminal, depois fui "evoluíndo"(se é que dá pra chamar assim)
                        e começando a mexer com outras tecnologias, hoje trabalho com 
                        <strong> Flutter</strong>, 
                        <strong> Dart</strong>, 
                        <strong> Laravel</strong>, 
                        <strong> React</strong>,
                        <strong> Nodejs </strong>
                        e outras que você pode ver em  <a className="mt-1" href="#skills"> <FiPenTool style={{fontSize: "14px"}}></FiPenTool> Habilidades</a>.
                       </span>
                    </div>
                </div>

                <div className="flex-row mt-4"> 
                    <div className="body-card mr-4">
                    <h2>
                            # Amor pela programação
                        </h2>
                    <span className="text-content">
                       Um dos maiores motivos que me fizeram gostar de programação
                       foi o fato de como todo e qualquer código/script tem um objetivo que o define,
                       seja um simples teste de aprendizado ou um complexo script de um aplicativo,
                       eles sempre tem um motivo pra terem sido criados.
                    </span>
                    </div>

                    <img src="icons/drawing-idea.png" alt="creativity" height="220px" />
                </div>
                
            </div>
        )
    }
}

export default Home;