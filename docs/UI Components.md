# [UI Components](/src/ui-component/)

This folder contains all the UI components used across the project such as cards, footers, maps and notifications.


## [Cards](/src/ui-component/cards/)

### [AuthSlider](/src/ui-component/cards/AuthSlider.jsx)

The `AuthSlider` component is a slider that displays a series of items, each containing a title and description. It uses the `react-slick` library to create the slider effect. Used in the [Reset Password page](/src/views/pages/authentication/ResetPassword.jsx)

### [AuthFooter](/src/ui-component/cards/AuthFooter.jsx)

The `AuthFooter` component is a simple footer that displays a link to `conradlabs.com`.

### [BackgroundPattern1](/src/ui-component/cards/BackgroundPattern1.jsx)

The `BackgroundPattern1` component used in the [Reset Password Page](/src/views/pages/authentication/ResetPassword.jsx) as the slider. It displays a SVG pattern that changes based on the current theme mode (light or dark).

### [CardSecondaryAction](/src/ui-component/cards/CardSecondaryAction.jsx)

The `CardSecondaryAction` component is a button that can be used as a secondary action for a card. It displays an icon and a tooltip with a title. When clicked, it opens a link in a new tab. For reference the button on the far right is the `CardSecondaryAction`:

![image](./images/secondaryAction.png)

### [MainCard](/src/ui-component/cards/MainCard.jsx)

The `MainCard` component is a custom card component that can be used as a wrapper for other components. It includes options for adding a title, secondary action, and custom styles. Empty Main Card looks like this:

![Where are the turtles?!](./images/mainCard.png)

### [RevenueCard](/src/ui-component/cards/RevenueCard.jsx)

The `RevenueCard` component is a card that displays revenue information, including a primary and secondary value, a label, and an icon.

Can be viewed in the app at: [base url]/widget

### [TotalIncomeLightCard](/src/ui-component/cards/TotalIncomeLightCard.jsx)

The `TotalIncomeLightCard` component is a card that displays total income information, including a value, a label, and an icon. It includes a loading state that displays a skeleton card while the data is being fetched.

Can be viewed in the app at: [base url]/widget

### [TotalIncomeDarkCard](/src/ui-component/cards/TotalIncomeDarkCard.jsx)

The `TotalIncomeDarkCard` component is a card that displays total income information, similar to the `TotalIncomeLightCard` component. However, it has a dark theme and includes a loading state that displays a skeleton card while the data is being fetched.

Can be viewed in the app at: [base url]/widget

### [SubCard](/src/ui-component/cards/SubCard.jsx)

The `SubCard` component is a custom card component that can be used as a wrapper for other components. It is similar to the `MainCard` component, but it has a different style and includes a dark title option. Empty SubCard:

![alt text](./images/subCard.png)

### [FollowerCard](/src/ui-component/cards/FollowerCard.jsx)

The `FollowerCard` component is a card that displays information about a follower, including their avatar, name, location, and follow status. It also includes a menu with options for managing the follower. 

Can be viewed in the app at: [base url]/basic/cards

### [FriendsCard](/src/ui-component/cards/FriendsCard.jsx)

The `FriendsCard` component is a card that displays information about a friend, including their avatar, name, location, and options for messaging or video calling them. It also includes a menu with options for managing the friend.

Can be viewed in the app at: [base url]/basic/cards

### [UserDetailsCard](/src/ui-component/cards/UserDetailsCard.jsx)

The `UserDetailsCard` component is a card that displays detailed information about a user, including their avatar, name, role, about section, email, contact information, and location. It also includes options for messaging or blocking the user.

Can be viewed in the app at: [base url]/basic/cards

### [UserProfileCard](/src/ui-component/cards/UserProfileCard.jsx)

The `UserProfileCard` component is a card that displays information about a user, including their avatar, name, role, status, and social media links. It also includes an option for messaging the user.

Can be viewed in the app at: [base url]/basic/cards


### [UserSimpleCard](/src/ui-component/cards/UserSimpleCard.jsx)

The `UserSimpleCard` component is a card that displays basic information about a user, including their avatar, name, status, and social media links. It also includes a menu with options for editing or deleting the user.

Can be viewed in the app at: [base url]/basic/cards

## [Skeleton Cards](/src/ui-component/cards/Skeleton/)

The project includes several skeleton cards that can be used as placeholders while data is being fetched. These components use the `Skeleton` component from Material-UI to create the loading effect.

### [ImagePlaceholder](/src/ui-component/cards/Skeleton/ImagePlaceholder.jsx)

The `ImagePlaceholder` component is a skeleton card that can be used as a placeholder for an image.


### [EarningCard](/src/ui-component/cards/Skeleton/EarningCard.jsx)

The `EarningCard` component is a skeleton card that can be used as a placeholder for an earning card such as [EarningCard](/src/views/widget/EarningCard.jsx). It includes placeholders for the earning icon, title, and value.

Can be viewed in the app at: [base url]/advance/skeleton

### [PopularCard](/src/ui-component/cards/Skeleton/PopularCard.jsx)

The `PopularCard` component is a skeleton card that can be used as a placeholder for a popular card. It includes placeholders for the card title, image, and a list of popular items.

Can be viewed in the app at: [base url]/advance/skeleton

### [TotalGrowthBarChart](/src/ui-component/cards/Skeleton/TotalGrowthBarChart.jsx)

The `TotalGrowthBarChart` component is a skeleton card that can be used as a placeholder for a total growth bar chart. It includes placeholders for the chart title, filter options, and the chart itself.

Can be viewed in the app at: [base url]/advance/skeleton

### [TotalIncomeCard](/src/ui-component/cards/Skeleton/TotalIncomeCard.jsx)

The `TotalIncomeCard` component is a skeleton card that can be used as a placeholder for a total income card. It includes placeholders for the income icon, title, and value.

Can be viewed in the app at: [base url]/advance/skeleton
