import { NodeNextRequest } from 'next/dist/server/base-http/node';
import styled from 'styled-components';

export const post = styled.div<ContainerProps>` 
    width: 784px;
    border: 1px solid black;
    border-radius: 16px;
    display: ${({hiden})=>(hiden? 'none' : 'flex')};
    flex-direction: column;
    padding: 16px 16px 8px 16px;

`;
export const UserInfo = styled.div` 
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: 24px;
    justify-content: flex-start;
    
`;
export const Photo = styled.img` 
    height: 56px;
    width: 56px;
`;
export const right = styled.div`
    font-size: 20px;
    opacity: 0.6;
    padding-top: 16px;
`;
export const left = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
`;
export const text = styled.span`
    font-size: 24px;
`;
export const botoes = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 592px;
`;
export const reaction = styled.button` 
    display:flex;
    flex-direction: row;
    font-size: 16px;
    background-color: #fafafa;
    border: 1px solid #fafafa;
`;
export const botão = styled.button`
    background-image: url('/assets/compartilhar.svg');
`;
export const excluir = styled.button` 
    background-color: #fafafa;
    border: 1px solid #fafafa;
`;
export const imagem = styled.img` 
    
`;
interface ContainerProps{
    hiden: boolean;
}