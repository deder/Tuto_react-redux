export const USER_SELECTED = "USER_SELECTED"
export const selectUser = (user) => {
    console.log("Selected", user);
    return {
        type: USER_SELECTED,
        payload: user
    }
}