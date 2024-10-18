## Theme

This project uses MUI's StyledEngineProvider and ThemeProvider to create a theme based on the Theme config from [ConfigContext](/src/contexts/ConfigContext.jsx). 

### [`index.js`](/src/themes/index.jsx)

The main theme is bundled here. `index.js` makes the following three imports to create a complete theme: [`Pallete`](/src/themes/palette.jsx), [`Typography`](/src/themes/typography.jsx) and [`Shadows`](/src/themes/shadows.jsx) to create seperate theme, typography and shadow objects based on the theme and preset seleceted in [config.js](/src/config.js).


##### To see how to set themes and colour presets see [ThemeConfig](/docs/ThemesConfig.md)



