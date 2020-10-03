import styled from 'styled-components';

export const PrussianBlueBg = styled.div`
    background-color: ${({ theme }) => theme.dark.secondary};
    height: 100vh;
    width: 100vw;
`;

export const SherpaBlueBg = styled.div`
    background-color: ${({theme}) => theme.dark.primary};
    height: 100vh;
    width: 100vw;
`;

export const ChittyMascot = styled.div`
    height: 60vw;
    max-height: 200px;
    width: 60vw;
    max-width: 200px;
    margin: 0 auto 60px auto;
    border-radius: 300px;
    background-color: ${({ theme }) => theme.dark.thirdly};
`;

export const UserInfoInput = styled.input`
    display: block;
    margin: 10px auto;
    background-color: ${({ theme }) => theme.dark.primary};
    color: white;
    width: 50vw;
    max-width: 400px;
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 0 20px;

    &:focus {
        outline: none;
    }
`;

export const NextBtn = styled.img`
    height: 40px;
    width: 40px;
`;

export const ChittyName = styled.p`
    color: ${({theme}) => theme.dark.thirdly};
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const OuterCircle = styled.div`
    display: flex;
    background-color: white;
    max-height: 82px;
    max-width: 82px;
    height: 7vw;
    width: 7vw;
    border-radius: 50%;
`;

export const ConvPic = styled.div<{ pic: string | undefined }>`
    background-color: ${({ theme }) => theme.dark.primary};
    height: 6.5vw;
    width: 6.5vw;
    max-height: 76px;
    max-width: 76px;
    border-radius: 50%;
    margin: auto;
    background-image: url(${({ pic }) => pic});
    background-size: cover;
`;