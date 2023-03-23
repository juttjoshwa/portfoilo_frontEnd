const DarkMode = (state = "light", action) => {
    switch (action.type) {
        case "DARK":
            return state = "dark"
        case "LIGHT":
            return state = "light"
        default :
        return state;
    }
}
    
export default DarkMode ;