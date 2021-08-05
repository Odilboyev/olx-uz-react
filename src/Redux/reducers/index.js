import detskiyMir from './../../Data//detskiy-mir'
import transport from './../../Data//transport'
import nedvijimost from './../../Data//nedvijimost'
import work from './../../Data//work'
import jivodniye from './../../Data//jivodniye'
import dom from './../../Data//dom'
import elektronika from './../../Data//elektronika'
import uslugi from './../../Data//uslugi'
import moda from './../../Data//moda'
import sport from './../../Data//sport'
import otdam from './../../Data//otdam'
import obmen from './../../Data//obmen'


const initialState = {
    data: {
        "detskiy-mir": detskiyMir,
        transport: transport,
        nedvijimost: nedvijimost,
        work: work,
        jivodniye: jivodniye,
        'dom-i-sad': dom,
        elektronika: elektronika,
        uslugi: uslugi,
        moda: moda,
        sport: sport,
        'otdam-darom': otdam,
        obmen: obmen,
    },
    theme: 'light'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            }
        case "TOGGLE_LIKE":
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            }
        default: return state
    }
}
export default reducer