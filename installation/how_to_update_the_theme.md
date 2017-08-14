# How to update the theme	

You can update your theme via FTP or via WordPress. See the information below for each method. No matter what method you choose, you first need to download the new theme files from Themeforest.


### Backup your site before updating the theme

Please follow the steps via using a plugin to automatically backup your current theme and uploading the new version: http://wordpress.org/extend/plugins/easy-theme-and-plugin-upgrades/

### Backup Setting of Customizer before updating the theme

Please use [this plugin](https://wordpress.org/plugins/customizer-export-import/) to backup the setting of Customizer.

### Prerequisites for updating the theme

1. First you need to download the latest version of theme. Log into your Themeforest account and navigate to your downloads tab. Find the **{{ book.themename }}** theme purchase.
2. Click the **download** button next to it and choose to download the **Installable WordPress Theme** which is just the WordPress file, or choose the **Main Files** which is the entire package which include theme documentation, plugins etc.

### Update using Envato Market Plugin

1. You need to download the plugin from here.
2. Go to **Themeforest > You Account > Settings > API Key** and copy API Key.
3. Click the **Envato Market** menu in WordPress Dashboard.
4. Enter your API Key and you will be able to see your purchased items which is included {{ book.themename }} theme

### Update using plugin

1. You need to download and install Easy Theme and Plugin Update.
2. After installing the plugin. Go to **Apperance > Themes > Add New > Upload Theme**
3. Select the downloaded ZIP file and choose **Upgrade existing theme** option to **Yes** and click **Install Now** button

### Update using WordPress Dashboard

1. You may want to use a plugin to automate backing up your current theme and uploading the new version: http://wordpress.org/extend/plugins/easy-theme-and-plugin-upgrades/
2. You need to deactivate **{{ book.themename }}** theme in the **Appearance > Themes** by simply activating a different theme. Once you activate a different theme, you can delete the {{ book.themename }} theme. Don’t worry. You really won’t loose any of your data.
3. Get the installable zip file from **Themeforest > Account > Download**. If you downloaded the **Main Files** from Themeforest, then you need to unzip the archive file you received, the **{{ book.themeslug }}.zip** will be inside of it.
4. Upload the zip file using **Appearance > Themes**. Once you uploaded successfully, activate the theme.

### Update using FTP

1. You may want to use a plugin to automate backing up your current theme and uploading the new version: http://wordpress.org/extend/plugins/easy-theme-and-plugin-upgrades/
2. Login to your FTP account. Navigate to **wp-content/themes** location and backup your **{{ book.themeslug }}** theme folder by saving it to your computer, or you can choose to simply delete it. Don’t worry. You really won’t loose any of your data.
3. Get the installable zip file from **Themeforest > Account > Download**. If you downloaded the **Main Files** from Themeforest, then you need to unzip the archive file you received, the **{{ book.themeslug }}.zip** will be inside of it.
4. Drag and drop the new **{{ book.themeslug }}** theme folder into **wp-content/themes** and select **Replace** if you didn’t delete it.

### Common Issues

1. **Are You sure you want to do this?** If you get this message. Please check with your webhost upload file size limit and ask them to increase the limitation.
2. **Theme is missing the style.css stylesheet error** This is because you have choosen an invalid theme file. Please follow instruction on [this page](https://help.market.envato.com/hc/en-us/articles/202821510).
3. **Theme install failed destination folder already exists** This is because WordPress allows you to have only 1 theme with the same name and folder. To get around this issue, please update theme using auto updater or FTP steps above.