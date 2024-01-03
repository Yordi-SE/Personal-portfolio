import { Change_Theme } from "./action"
const initial_theme = {
    theme: 0
}
const ThemeReducer = ((state = initial_theme, action) => {
    switch(action.type) {
        case Change_Theme: return {
            theme: state.theme === 1 ? 0 : 1
        }
        default: return state
    }
})
export default ThemeReducer