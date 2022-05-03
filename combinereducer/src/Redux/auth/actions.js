export const CHECK_USER_STATUS = "CHECK_USER_STATUS";


export const checkUserStatus = (data) => {
    return {
        type: CHECK_USER_STATUS,
        payload: data
    }
};