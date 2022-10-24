import styled from 'styled-components';

export const header = styled.div`
    width: 100vw;
    height: 120px;
    background-color: rgba(131, 197, 190, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 135px 0px 100px;
    align-items: center;
    position: sticky;
    z-index: 2;
    top:0;
`;
export const body = styled.div`
    background-color: #fafafa;
    width: 100vw;
    height: 100vh;
    padding-right: 100px;
    padding-left: 100px;
    display: flex;
    flex-direction: row;
`;
export const mainbody = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

`;
export const sidebar = styled.div`
    height: 960px;
    width: 416px;
    background-color: #fafafa;
    border-right: 1px solid black;
    padding-top: 24px;
    border-radius: 8px;
    position: sticky;
    left: 0;

`;
export const feed = styled.div`
    height: 960px;
    width: 848px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;

    gap: 24px;
`;
export const trending = styled.div`
    height: 960px;
    width: 416px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    gap: 56px;
`;
export const pesquisa = styled.input` 
    width: 246px;
    height: 40px;
    height: 42px;
    border: 1px solid #fafafa;
`;
export const logo = styled.div`
    font-weight: medium ;
    font-size: 64px;
    display: flex;
    align-items: center;
    height: 104px;
`;
export const um = styled.div` 
    display: flex;
    flex-direction: row;
    background-color: #fafafa;
    width: 288px;
    border-radius: 8px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: 8px;
    `;
export const pesquisa2 = styled.input` 
    width: 288px;
    height: 48px;
    border: 1px solid #fafafa;
    border-radius: 12px; 
    `;
export const dois = styled.div` 
    width: 416px;
    height: 384px;
    background-color: #fafafa;
    border-right: 1px solid black;
`;
export const imgGrande = styled.img` 
    width: 88px;
    height: 88px;
    border-radius: 44px;
    border: 1px solid black;
`;
export const Searchbartop = styled.div` 
    width: 288px;
    height: 48px;
    background-color: #fafafa;
    display: flex;
    border-radius: 8px;
    align-items: center;
    padding-left: 12px;
    border: 1px solid black;
`;
export const lupinha = styled.img` 
    width: 24px;
    height: 24px;
`;
export const Usertop = styled.div`
    display: flex;
    gap: 16px;
    width: 392px;
    align-items: center;
`;
export const topsidebar = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding-bottom: 8px;
`;
export const tres = styled.div` 
    display: flex; 
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    padding-left: 16px;
`;
export const WritePiu = styled.input` 
    width: 352px;
    height: 104px;
    border: 1px solid black;
    border-radius: 16px;
`;
export const submitbutton = styled.div` 
    display: flex;
    justify-content: flex-end;
    padding-right: 48px;
`;
export const button = styled.button` 
    height: 24px;
    width: 120px;
    border-radius: 16px;
    background-color: #83C5BE;
`;
export const topics = styled.div` 
    background-color: #f1f1f1;
    height: 616px;
    width: 416px;
    border-radius: 24px;
    font-size: 32px;
`;
export const Siga = styled.div` 
    height: 232px;
    width: 416px;
    border-radius: 24px;
    background-color: #f1f1f1;
    font-size: 32px;
`;