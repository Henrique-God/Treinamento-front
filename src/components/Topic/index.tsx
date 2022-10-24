import * as S from './styles';

export type TopicComponentProp = {
    title: string;
    img: string;
};

const Topic: React.FC<TopicComponentProp> = ({ title, img }) => (
    <S.container>
        <S.Icon src= {img}></S.Icon>
        <S.Title>{title}</S.Title>
    </S.container>
);

export default Topic;