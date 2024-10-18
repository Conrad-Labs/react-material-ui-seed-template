## [Forms](/src/views/forms/)

### [Chart](/src/views/forms/chart/)

This project implements charts using 2 libraries:

1. [ApexCharts](https://apexcharts.com/)
2. [React Organizational Chart](https://www.npmjs.com/package/react-organizational-chart)

#### ApexCharts

The project implements:

1. Column Chart
2. Bar Chart
3. Line Chart
4. Area Chart
5. Mixed Chart
6. Redial Chart
7. Polar Chart
8. Pie Chart

Rendered Components can be viewed at [base url]/forms/charts/apexchart
Usage can be seen at [index](/src/views/forms/chart/Apexchart/index.jsx)

[Apex Documentation](https://apexcharts.com)

#### [React Organizational Chart](/src/views/forms/chart/OrgChart/)

The project implements:

1. A Simple Chart
2. A Styled Chart

Rendered Components can be viewed at [base url]/forms/charts/orgchart
Usage can be seen at [index](/src/views/forms/chart/OrgChart/index.jsx)

[React Organizational Chart Documentation](https://www.npmjs.com/package/react-organizational-chart)

### [Components](/src/views/forms/components/)

This documentation provides an overview of the form components used in the project.

#### [AutoComplete](/src/views/forms/components/AutoComplete.jsx)

The AutoComplete component is a dropdown input field that suggests options as the user types. It is implemented using the Material-UI Autocomplete component.

##### Props

The AutoComplete component takes the following props:

- `options`: An array of objects representing the available options. Each object should have a `label` and an `id` property.
- `defaultValue`: The initial value of the AutoComplete component.
- `renderInput`: A function that returns a TextField component. This function is used to customize the input field.

Rendered component can be viewed at: [base url]/components/autocomplete

#### [Button](/src/views/forms/components/Button.jsx)

The Button component is a clickable element that triggers an action. It is implemented using the Material-UI Button component.

##### Props

The Button component supports various props to customize its appearance and behavior, such as `variant`, `color`, `size`, `startIcon`, `endIcon`, `disabled`, and `href`.

Rendered component can be viewed at: [base url]/components/button

#### [Checkbox](/src/views/forms/components/Checkbox.jsx)

The Checkbox component is a form control that allows the user to select multiple options from a set. It is implemented using the Material-UI Checkbox component.

##### Props

The Checkbox component supports various props to customize its appearance and behavior, such as `color`, `size`, `defaultChecked`, `disabled`, and `label`.

Rendered component can be viewed at: [base url]/components/checkbox

#### [Radio](/src/views/forms/components/Radio.jsx)

The Radio component is a form control that allows the user to select a single option from a set. It is implemented using the Material-UI Radio component.

##### Props

The Radio component supports various props to customize its appearance and behavior, such as `color`, `size`, `defaultChecked`, `disabled`, `label`, and `labelPlacement`.

Rendered component can be viewed at: [base url]/components/radio

#### [Switch](/src/views/forms/components/Switch.jsx)

The Switch component is a form control that allows the user to toggle between two states. It is implemented using the Material-UI Switch component.

##### Props

The Switch component supports various props to customize its appearance and behavior, such as `color`, `size`, `defaultChecked`, `disabled`, and `label`.

Rendered component can be viewed at: [base url]/components/switch

#### [TextField](/src/views/forms/components/TextField.jsx)

The TextField component is a form control that allows the user to enter text. It is implemented using the Material-UI TextField component.

##### Props

The TextField component supports various props to customize its appearance and behavior, such as `variant`, `label`, `placeholder`, `defaultValue`, `disabled`, `multiline`, `rows`, `size`, and `helperText`.

Rendered component can be viewed at: [base url]/components/text-field

#### [Slider](/src/views/forms/components/Slider/)

The Slider component is a form control that allows the user to select a value from a range. It is implemented using the Material-UI Slider component.

##### Props

The Slider component supports various props to customize its appearance and behavior, such as `value`, `defaultValue`, `disabled`, `min`, `max`, `step`, `marks`, `orientation`, `valueLabelDisplay`, and `getAriaValueText`.

Rendered component can be viewed at: [base url]/components/slider

#### [DateTime](/src/views/forms/components/DateTime/)

The DateTime component is a form control that allows the user to select a date and time. It is implemented using the Material-UI DateTimePicker component from the `@mui/x-date-pickers` package.

##### Props

The DateTime component supports various props to customize its appearance and behavior, such as `value`, `defaultValue`, `disabled`, `minDate`, `maxDate`, `format`, and `slotProps`.

Rendered component can be viewed at: [base url]/components/date-time

### [Plugins](/src/views/forms/plugins/)

#### [Autocomplete](/src/views/forms/plugins/AutoComplete.jsx)

This is a React component that uses Material-UI's Autocomplete component to provide various autocomplete functionalities. The component includes examples of different use cases such as combo boxes, country select, controllable states, free solo, search input, creatable, grouped, and disabled options.

Rendered example can be seen here: [base url]/forms/frm-autocomplete

### [ClipBoard](/src/views/forms/plugins/Clipboard.jsx)

This is a React component that uses the react-copy-to-clipboard library to provide copy and cut functionality for text fields and containers. The component includes examples of copying text from a text field, copying and cutting text from a text area, and copying text from a container.

Rendered example can be seen here: [base url]/forms/frm-clipboard

### [DropZone](/src/views/forms/plugins/Dropzone.jsx)

The Dropzone component allows users to upload multiple files, single files, or avatars. It uses the react-dropzone library to handle file uploads and provides options for displaying the uploaded files in a list or grid view. The component uses Formik for form handling and Yup for form validation.

It uses the [UploadSingleFile](/src/ui-component/third-party/dropzone/SingleFile.jsx) component and [MultiFile](/src/ui-component/third-party/dropzone/MultiFile.jsx) component.

Rendered example can be seen at: [base url]/forms/frm-dropzone

### [Mask](/src/views/forms/plugins/Mask.jsx)

 The Mask component provides input masking for phone numbers, network addresses, and dates/times. It uses the react-number-format library to handle input masking and the @mui/x-date-pickers library to handle date and time pickers.

Rendered example can be seen at: [base url]/forms/frm-mask

### [Recaptcha](/src/views/forms/plugins/Recaptcha.jsx)

 The Recaptcha component provides a reCAPTCHA form field for user authentication. It uses the react-google-recaptcha library to handle reCAPTCHA integration.

Rendered example can be seen at: [base url]/forms/frm-recaptcha

### [Tooltip](/src/views/forms/plugins/Tooltip.jsx)

The Tooltip component provides tooltip functionality for various UI elements, such as buttons, icons, and text. It uses Material-UI's Tooltip component to handle tooltip integration.

Rendered example can be seen at: [base url]/forms/frm-tooltip

### [Modal](/src/views/forms/plugins/Modal/)

This is a React component that provides a simple modal dialog box. The modal dialog box can be opened by clicking a button, and it can be closed by clicking the close button in the dialog box or by clicking outside the dialog box.

It implements [SimpleModal](/src/views/forms/plugins/Modal/SimpleModal.jsx) and [ServerModal](/src/views/forms/plugins/Modal/ServerModal.jsx)

Rendered example can be seen at: [base url]/forms/frm-modal

## [Layout](/src/views/forms/layouts/)

This project also implements a number of layouts for forms:

1. [Simple](/src/views/forms/layouts/Layouts.jsx)
2. [MultiColumn](/src/views/forms/layouts/MultiColumnForms.jsx)
3. [ActionBar](/src/views/forms/layouts/ActionBar.jsx)
4. [StickyAction](/src/views/forms/layouts/StickyActionBar.jsx)

## [Tables](/src/views/forms/tables/)

This project implements multiple tables based on the MUI's Tables

1. [Basic Table](/src/views/forms/tables/TableBasic.jsx)
2. [TableCollapsible](/src/views/forms/tables/TableCollapsible.jsx)
3. [TableData](/src/views/forms/tables/TableData.jsx)
4. [Dense Table](/src/views/forms/tables/TableDense.jsx)
5. [Enhanced Table](/src/views/forms/tables/TableEnhanced.jsx)
6. [Customized Table](/src/views/forms/tables/TablesCustomized.jsx)
7. [Sticky Head Table](/src/views/forms/tables/TableStickyHead.jsx)

Additionally it also implements [CSV Export](/src/views/forms/tables/TableExports.jsx) to export data to a csv. Each table is populated by data created in their respective code file.

## Forms Validation and Wizard

The project implements Validation for forms as well.

[Form Validation](/src/views/forms/forms-validation/)
[Form Wizard](/src/views/forms/forms-wizard/)
