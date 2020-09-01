module.exports = {
    theme: {
        fontFamily: {
            mono: [
                'Ubuntu\\ Mono',
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
            ],
            sans: [
                'Didact\\ Gothic',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
            ubuntu: ['Ubuntu'],
        },
        extend: {
            width: {
                '800': '50rem',
            },
            height: {
                '460': '28.75rem',
            },
            inset: {
                '1/2': '50%',
                '5': '5rem',
            },
            colors: {
                romanPrimary: '#D59945',
                romanBrown: '#815E4A',
                romanBlack: '#1F242B',
                romanGrey: '#2B2A29',
                romanYellow: '#BE8523',
                romanWhite: '#F5F5F5',
                romanText: 'rgba(245, 245, 245, 0.40)',
            },
            translate: {
                '1/2': '50%',
            },
            fontSize: {
                xlxlxl: '6rem',
            },
        },
        screens: {
            'sm': {'min': '640px', 'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px', 'max': '1279px'},
            'xl': {'min': '1280px'},
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Filenames to scan for classes
        content: [
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
        ],
        // PurgeCSS options
        options: {
            // Whitelist specific selectors by name
            // whitelist: [],
        },
    },
};
