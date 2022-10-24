import * as S from './style';

export type NavComponentsProps = {
    title: string;
    img: string;
};

const NavComponent: React.FC<NavComponentsProps> = ({ title, img }) => (
    <S.container>
        <S.Icon src= {img}></S.Icon>
        <S.Title>{title}</S.Title>
    </S.container>
);

export default NavComponent;
