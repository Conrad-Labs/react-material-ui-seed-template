import PropTypes from 'prop-types';
import { useEffect } from 'react';

// material-ui
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// third-party
import rtlPlugin from 'stylis-plugin-rtl';
import useConfig from 'hooks/useConfig';

// project imports
import { ThemeDirection } from 'config';

// ==============================|| RTL LAYOUT ||============================== //

const RTLLayout = ({ children }) => {
    const { themeDirection } = useConfig();

    useEffect(() => {
        document.dir = themeDirection;
    }, [themeDirection]);

    const cacheRtl = createCache({
        key: themeDirection === ThemeDirection.RTL ? 'rtl' : 'css',
        prepend: true,      //new styles are added on top of the previous caches so can overide default styles
        stylisPlugins: themeDirection === ThemeDirection.RTL ? [rtlPlugin] : [] //plugins that can transform css b4 being added to cache, 
    });

    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

RTLLayout.propTypes = {
    children: PropTypes.node
};

export default RTLLayout;
