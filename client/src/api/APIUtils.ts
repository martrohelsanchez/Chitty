import axios from 'axios';
import {Conversation_LastMessage, LastSeen, User, MembersMeta, Message} from '../shared/types/dbSchema';

export interface UserAuthRes {
    userId: string;
    username: string;
    isAuth: boolean;
    csrfToken: string;
}

export async function logInReq(
    username: string, 
    cb?: (UserAuthRes) => void, 
    errCb?: (err: Error) => void
) {
    try {
        const {data} = await axios.post<UserAuthRes>('/user/logIn', {
            username: username.trim()
        }, {
            withCredentials: true
        });

        if (cb) {
            cb(data);
        } else {
            return data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

export const reAuthReq = async (
    cb?: (data: UserAuthRes) => void, 
    errCb?: (err: Error) => void
) => {
    try {
        const {data} = await axios.post<UserAuthRes>('/user/reAuth', {}, {
            withCredentials: true
        });

        if (cb) {
            cb(data)
        } else {
            return data
        }
    } catch (err) {
        if (errCb) {
            errCb(err)
        } else {
            throw err;
        }
    }
}

interface UpdatedSeen {
    convId: string,
    userId: string,
    new_seen: number
}

export const seenConvReq = async (
    convId: string, 
    cb?: (data: UpdatedSeen) => void, 
    errCb?: (err: Error) => void
) => {
    try {
        const {data} = await axios.patch<UpdatedSeen>(`/chat/conversations/${convId}/seen`, {}, {
            withCredentials: true
        });

        if (cb) {
            cb(data);
        } else {
            return data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

export const getConversationsReq = async (
    limit: number, 
    before: number | null = null, 
    cb?: (data: {conversations: Conversation_LastMessage[]}) => void, 
    errCb?: (err: Error) => void
) => {
    try {
        const res = await axios.get<{ conversations: Conversation_LastMessage[]}>('/chat/conversations', {
            params: {  
                before: before,
                limit: 10
            }
        });

        if (cb) {
            cb(res.data);
        } else {
            return res.data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

export const updateMsgIsDeliveredReq = async (
    convId: string, 
    msgId: string,
    errCb?: (err: Error) => void
) => {
    try {
        const res = await axios.patch(`/chat/conversations/${convId}/deliver`, {
            msgId
        })
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

//Get one conversation where the members are exactly what was given
export const getConversationByMembersReq = async (
    convMembers: string[], 
    cb?: (data: { conversation: Conversation_LastMessage | undefined}) => void, 
    errCb?: (err: Error) => void
) => {
    try {
        const { data } = await axios.get<{ conversation: Conversation_LastMessage | undefined}>('/chat/conversation', {
            params: {
                members: convMembers
            }
        });

        if (cb) {
            cb(data);
        } else {
            return data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

export const getLastSeen = async (
    cb?: (data: LastSeen) => void,
    errCb?: (err: Error) => void
) => {
    try {
        const {data} = await axios.get<LastSeen>('/user/last-seen');
        
        if (cb) {
            cb(data);
        } else {
            return data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

export const getMembersReq = async (
    convId: string,
    usersId: string[],
    cb?: (data: User[]) => void,
    errCb?: (err: Error) => void
) => {
    try {
        const {data} = await axios.get<User[]>(`/chat/conversations/${convId}/members`, {
            params: {
                usersId
            }
        });

        if (cb) {
            cb(data);
        } else {
            return data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

export const getMembersMetaReq = async (
    convId: string,
    membersMetaId: string,
    cb?: (data: MembersMeta) => void,
    errCb?: (err: Error) => void
) => {
    try {
        const {data} = await axios.get<MembersMeta>(`/chat/conversations/${convId}/membersMeta`, {
            params: {
                membersMetaId
            }
        });

        if (cb) {
            cb(data);
        } else {
            return data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}

export const getMessagesReq = async (
    convId: string,
    limit: number,
    before: number | null,
    cb?: (data: {messages: Message[]}) => void,
    errCb?: (err: Error) => void
) => {
    try {
        const {data} = await axios.get<{messages: Message[]}>(`/chat/conversations/${convId}/messages`, {
            params: {
                before,
                limit
            }
        })

        if (cb) {
            cb(data);
        } else {
            return data;
        }
    } catch (err) {
        if (errCb) {
            errCb(err);
        } else {
            throw err;
        }
    }
}