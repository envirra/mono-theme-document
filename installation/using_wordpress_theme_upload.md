# Using Wordpress Theme Upload

1. Login to your WordPress admin.
2. In the **Appearance > Themes** menu click the tab **"Install Themes"**
3. At the top of the page click, **"Upload"**, then click the file input to select a file.
4. Select the zipped theme file, **"{{ book.themeslug }}.zip"** available in **Theme files** folder from the package downloaded from ThemeForest, and click **"Install Now"**
5. After installation you will receive a success message confirming your new install.
6. Click the link **"Activate"**

### Common Issues

1. **Are You sure you want to do this?** If you get this message. Please check with your webhost upload file size limit and ask them to increase the limitation.
2. **Theme is missing the style.css stylesheet error** This is because you have choosen an invalid theme file. Please follow instruction on [this page](https://help.market.envato.com/hc/en-us/articles/202821510).
3. **Theme install failed destination folder already exists** This is because WordPress allows you to have only 1 theme with the same name and folder. To get around this issue, please update theme using auto updater or FTP steps above.

### Recommended Additional Step

We highly recommend the use of child themes. The additional step involves repeating steps 1 to 6 for **{{ book.themeslug }}-child.zip** file