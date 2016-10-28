function switchLanguage (event, data) {
    window.location = '/' +  data.item.value;
}

$('#lang-select').selectmenu(
    {
        change: switchLanguage
    }
);
