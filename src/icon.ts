export type ICON_INFO = {
    width: number;
    height: number;
    viewBox: string;
    path: string[];
    stroke: string;
    fill: string;
};

export const ICONS: Record<string, ICON_INFO> = {
    ARROW_UP: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    CLOSE: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    TWITTER: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    UP_RIGHT: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z',
            'M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    ARCHIVE: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    IMAGE: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
            'M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    INFO_RECT_FILLED: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    INFO_RECT: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z',
            'm8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    INFO_CIRCLE: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z',
            'M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    CHAT: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z',
            'M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    TEXT: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M12.258 3H3.747l-.082 2.46h.478c.26-1.544.76-1.783 2.694-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L12.258 3z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    REFRESH: {
        width: 20,
        height: 20,
        viewBox: '0 0 15.011423110961914 21.098501205444336',
        path: [
            'M15.006 10.57c0-1.948-.618-3.397-2.066-4.844a1 1 0 0 0-1.414 1.415c1.079 1.078 1.48 2.007 1.48 3.43a5.46 5.46 0 0 1-1.611 3.887c-1.004 1.003-2.078 1.502-3.428 1.593l1.246-1.247a1 1 0 1 0-1.414-1.414l-3.707 3.707 3.707 3.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-1.337-1.336c1.923-.082 3.542-.792 4.933-2.18a7.447 7.447 0 0 0 2.197-5.304zm-13 .027c0-1.469.572-2.85 1.61-3.889C4.627 5.7 5.71 5.2 7.075 5.114L5.799 6.39a.999.999 0 0 0 .707 1.708.997.997 0 0 0 .707-.293l3.707-3.707L7.213.39a1 1 0 1 0-1.414 1.414l1.31 1.311c-1.913.086-3.524.796-4.906 2.18a7.447 7.447 0 0 0-2.197 5.302c0 1.948.618 3.397 2.066 4.844a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.416c-1.08-1.077-1.48-2.006-1.48-3.428z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    TABLE: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    DOCS: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z',
            'M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z',
            'M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    GITHUB: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    FIND: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    SPLIT: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2V2z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    TOGGLE_ON: {
        width: 22,
        height: 22,
        viewBox: '0 0 2048 1792',
        path: [
            'M0 896q0-130 51-248.5t136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5-51 248.5-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5zm1408 512q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    TOGGLE_OFF: {
        width: 22,
        height: 22,
        viewBox: '0 0 2048 1792',
        path: [
            'M1152 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5zm768 0q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5h-386q119 90 188.5 224t69.5 288-69.5 288-188.5 224h386q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5zm128 0q0 130-51 248.5t-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5 51-248.5 136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    PDF: {
        width: 20,
        height: 20,
        viewBox: '0 0 16 16',
        path: [
            'M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z',
            'M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z'
        ],
        stroke: 'none',
        fill: 'currentColor'
    },
    PLAY: {
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        path: ['M7 4v16l13 -8z'],
        stroke: 'none',
        fill: 'currentColor'
    },
    LINK: {
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        path: [
            'M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5',
            'M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5'
        ],
        stroke: 'currentColor',
        fill: 'none'
    },
    MAXIMIZE: {
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        path: [
            'M5 9h2a2 2 0 0 0 2 -2v-2',
            'M15 19v-2a2 2 0 0 1 2 -2h2',
            'M15 5v2a2 2 0 0 0 2 2h2',
            'M5 15h2a2 2 0 0 1 2 2v2'
        ],
        stroke: 'currentColor',
        fill: 'none'
    },
    MINIMIZE: {
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        path: [
            'M4 8v-2a2 2 0 0 1 2 -2h2',
            'M4 16v2a2 2 0 0 0 2 2h2',
            'M16 4h2a2 2 0 0 1 2 2v2',
            'M16 20h2a2 2 0 0 0 2 -2v-2'
        ],
        stroke: 'currentColor',
        fill: 'none'
    }
};
