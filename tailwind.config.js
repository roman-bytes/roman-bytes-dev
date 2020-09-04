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
                '2.5': '2.5rem',
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
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }
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
