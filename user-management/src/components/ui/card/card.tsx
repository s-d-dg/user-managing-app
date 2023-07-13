import styled from 'styled-components';

export interface CardProps {
    children?: React.ReactNode;
}

const EmptyCard = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 6px;
`;

export default function Card({ children }: CardProps) {
    return <EmptyCard>
        {children}
    </EmptyCard>
}