export const selectUser = (user) => {
    return {
        type: "user_Selected",
        payload: user
    }
}