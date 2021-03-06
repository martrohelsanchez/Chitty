import styled, {css} from 'styled-components';

export const PrussianBlueBg = styled.div`
    background-color: ${({ theme }) => theme.dark.secondary};
    height: 100%;
    width: 100%;
`;

export const SherpaBlueBg = styled.div`
    background-color: ${({theme}) => theme.dark.primary};
    height: 100%;
    width: 100%;
`;

export const ChittyMascot = styled.div<{mascot: string}>`
    background-image: url(${({mascot}) => mascot});
    background-size: auto 80%;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: min(100%, 200px);
    width: 100%;
    max-width: 200px;
    margin: 0 auto 60px auto;
    border-radius: 300px;
    background-color: #ead3b7;
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
    position: relative;
    background-color: white;
    padding-top: 23%;
    width: 23%;
    border-radius: 50%;
    box-sizing: border-box;
`;

export const ConvPic = styled.div<{ pic: string | undefined }>`
    background-color: ${({ theme }) => theme.dark.primary};
    padding-top: 91%;
    width: 91%;
    border-radius: 50%;
    background-image: url(${({ pic }) => pic});
    background-size: cover;
    box-sizing: border-box;
`;

export const centerHorVer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;