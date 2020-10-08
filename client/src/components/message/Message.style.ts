import styled from 'styled-components';

export const MsgBox = styled.span<{
    isFromUser: boolean;
    startOfMultipMsgs: boolean;
    endOfMultipMsgs: boolean;
}>`
    display: inline-block;
    background-color: ${({ theme, isFromUser }) => isFromUser ? theme.dark.thirdly : theme.dark.primary};
    padding: .5rem .8rem;
    color: ${({ theme, isFromUser }) => isFromUser ? theme.text.secondary : theme.text.primary};
    box-sizing: border-box;
`;

export const StyledMessage = styled.div<{ isFromUser: boolean }>`
    align-self: ${({ isFromUser }) => isFromUser ? 'flex-end' : 'flex-start'};
    margin: ${({ isFromUser }) => isFromUser ? '2px 0 0 0' : '2px 30px 0 30px'}; 
    max-width: 60%;
`;

export const UserProfilePic = styled.img`
    height: 28px;
    border-radius: 40px;
    margin: 0 0 -7px -30px;
`;

export const SenderUsername = styled.p`
    color: gray;
    font-weight: lighter;
    font-size: 1rem;
    margin: 0 13px;
`;