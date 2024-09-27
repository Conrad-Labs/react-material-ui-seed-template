import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

// project import
import useConfig from 'hooks/useConfig';
import Palette from './palette';
import Typography from './typography';

import componentStyleOverrides from './compStyleOverride';
import customShadows from './shadows';

export default function ThemeCustomization({ children }) {

    // uses usecontext to maintain cofig variables
    const { borderRadius, fontFamily, mode, outlinedFilled, presetColor, themeDirection } = useConfig();

    // caches the values that pallette calculates based on the dependancies of mode and presetcolor, 
    const theme = useMemo(() => Palette(mode, presetColor), [mode, presetColor]);

    const themeTypography = useMemo(() => Typography(theme, borderRadius, fontFamily), [theme, borderRadius, fontFamily]);
    const themeCustomShadows = useMemo(() => customShadows(mode, theme), [mode, theme]);

    const themeOptions = useMemo(
        () => ({
            direction: themeDirection,
            palette: theme.palette,
            mixins: {
                toolbar: {
                    minHeight: '48px',
                    padding: '16px',
                    '@media (min-width: 600px)': {
                        minHeight: '48px'
                    }
                }
            },
            typography: themeTypography,
            customShadows: themeCustomShadows
        }),
        [themeDirection, theme, themeCustomShadows, themeTypography]
    );

    const themes = createTheme(themeOptions);
    themes.components = useMemo(
        () => componentStyleOverrides(themes, borderRadius, outlinedFilled),
        [themes, borderRadius, outlinedFilled]
    );

    return (
        // StyledEngineProvider: allows to inject the MUI b4 global css style sheet allowing for global css to overide MUI
        <StyledEngineProvider injectFirst>
            
            <ThemeProvider theme={themes}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

ThemeCustomization.propTypes = {
    children: PropTypes.node
};
