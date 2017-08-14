# Translation

This theme is translation ready. The translation files .po/.mo are located in the theme folder **wp-content/themes/{{ book.themename }}/languages**. We've included English Translation right away.

### WordPress Translation Setting

For WordPress 4.0 + users please follow below steps

1. Login to your WordPress Dashboard and navigate to **Settings > General Settings**
2. Make sure **Site Language** option is set to your desired language.

### Translating The Theme

1. Open presso.pot file using [POEdit](http://www.poedit.net/)
2. Click Create new translation button and choose the language.
3. Translate the text.
4. Hit save, a new .PO and .MO file will be created.
5. Dont't forget to backup the created .PO and .MO files.

### Rename/Change Words

1. Open presso.pot file using [POEdit](http://www.poedit.net/)
2. Click Create new translation button and choose the English language.
3. Change the words you want.
4. Hit save, a new .PO and .MO file will be created.
5. Dont't forget to backup the created .PO and .MO files.

### RTL Support

For languages that read from right-to-left unlike English which is left-to-right, {{ book.themename }} will automatically switch to an RTL style, as long as you it's in your language and uses the correct locale (as explained above).