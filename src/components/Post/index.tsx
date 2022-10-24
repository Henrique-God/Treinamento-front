import { useState } from 'react';
import * as S from './styles';

export type PostProp = {
    title: string;
    hiden?: boolean;
};

const Post: React.FC<PostProp> = ({ title }) => {
    const [liked, setLiked] = useState(false);
    const [exclui, setExclui] = useState(false);
    return (
        <S.post hiden= {exclui}>
            <S.UserInfo>
                <S.left>
                    <S.Photo src="/assets/Frame 6.png"></S.Photo>
                    Godoy
                </S.left>
                <S.right>@henrique.god</S.right>
            </S.UserInfo>
            <S.text>{title}</S.text>
            <S.botoes>
                <S.reaction>
                    <img onClick= {() => setLiked(!liked)} src={liked ? "/assets/likevermelho.svg" : "/assets/like.svg"}/>
                </S.reaction>
                <S.reaction>
                    <S.imagem src="/assets/risada.svg"></S.imagem>
                    10
                </S.reaction>
                <S.botão>
                    <img src="/assets/compartilhar.svg"></img>
                </S.botão>
                <S.excluir onClick = {() => setExclui(true)}
                
                >Excluir</S.excluir>
            </S.botoes>
        </S.post>
    );
};

export default Post;
