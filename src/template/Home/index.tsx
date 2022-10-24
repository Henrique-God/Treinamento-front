import Test from 'components/TestComponent';
import * as S from './styles';
import NavComponent from 'components/Chatcomponents';
import Topic from 'components/Topic';
import { useState } from 'react';
import Post from 'components/Post';



const HomeTemplate = () => {
    const [Postagens, setPostagens] = useState<string[]>(
        ['asdolfsdjfosdjfsd', 'segundo piu teste', 'terceiro dddddsdddd']
    )
    const [ValorInputPost, SetValorInputPost] = useState("");
    
    function handleClick() {
        setPostagens([ValorInputPost, ...Postagens]);
    }
    
    return (
        <S.mainbody>
            <S.header>
                <S.logo>
                    <S.imgGrande src="/assets/Logo1.svg" />
                    Piupiwer
                </S.logo>
                <S.Usertop>
                    <S.Searchbartop>
                        <S.lupinha src="/assets/lupa.svg"></S.lupinha>
                        <S.pesquisa></S.pesquisa>
                    </S.Searchbartop>
                    <S.imgGrande src="/assets/User.svg"></S.imgGrande>
                </S.Usertop>
            </S.header>
            <S.body>
                <S.sidebar>
                    <S.topsidebar>
                        <S.lupinha src="/assets/conversinhas.svg"></S.lupinha>
                        <S.um>
                            <S.lupinha src="/assets/lupa.svg"></S.lupinha>
                            <S.pesquisa2></S.pesquisa2>
                        </S.um>
                    </S.topsidebar>
                    <S.dois>
                        <NavComponent
                            title="Oii como vc tá?? Faz tempo que..."
                            img="/assets/M.svg"
                        ></NavComponent>
                        <NavComponent
                            title="Denovo cara, não é possível qu..."
                            img="/assets/L.svg"
                        ></NavComponent>
                        <NavComponent
                            title="Ficou sabendo que ontem o Guil..."
                            img="/assets/A.svg"
                        ></NavComponent>
                        <NavComponent
                            title="Ou nao esquece de dar parabens..."
                            img="/assets/C.svg"
                        ></NavComponent>
                    </S.dois>
                    <S.tres>
                        <S.WritePiu
                        value = {ValorInputPost}
                        onChange = {(x)=>(SetValorInputPost(x.target.value))}> 
                        </S.WritePiu>
                        <S.submitbutton>
                            <S.button
                            onClick = {()=>handleClick()}
                            >Enviar!
                                
                            </S.button>
                        </S.submitbutton>
                    </S.tres>
                </S.sidebar>
                <S.feed>
                    {Postagens.map((e)=>(
                        <Post title={e}></Post>
                    ))}
                </S.feed>
                <S.trending>
                    <S.topics>
                        Assuntos do momento
                        <Topic
                            title="Preço do petróleo sobe para..."
                            img="/assets/G1.svg"
                        ></Topic>
                        <Topic
                            title="Matuê libera seu novo album..."
                            img="/assets/matue.svg"
                        ></Topic>
                        <Topic
                            title="Luva de pedreiro irá partic..."
                            img="/assets/luva.svg"
                        ></Topic>
                        <Topic
                            title="Poli Júnior é a maior empre..."
                            img="/assets/pj.svg"
                        ></Topic>
                        <Topic
                            title="Jade Picon responde a provo..."
                            img="/assets/jade.svg"
                        ></Topic>
                        <Topic
                            title="Flamengo vence do corinthin..."
                            img="/assets/flamengo.svg"
                        ></Topic>
                    </S.topics>
                    <S.Siga>
                        Siga também:
                        <Topic
                            title="Poli Júnior  @polijunior"
                            img="/assets/pj.svg"
                        ></Topic>
                        <Topic
                            title="Flamengo  @flamengooficial..."
                            img="/assets/flamengo.svg"
                        ></Topic>
                    </S.Siga>
                </S.trending>
            </S.body>
        </S.mainbody>
    );
};

export default HomeTemplate;
