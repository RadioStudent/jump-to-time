CKEDITOR.dialog.add( 'jumpToTimeDialog', function( editor ) {
    return {
        title: 'Skok na čas',
        minWidth: 200,
        minHeight: 100,
        contents: [
            {
                id: 'tab-basic',
                label: 'Nastavitve',
                elements: [
                    {
                        type: 'text',
                        id: 'time',
                        label: 'Čas',
                        validate: CKEDITOR.dialog.validate.regex(/^([0-9]|[0-9][0-9]|[0-9][0-9][0-9]):[0-5][0-9]$/i, 'Vnesite točko v posnetku v obliki MM:SS' )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;

            var selectedText = editor.getSelection().getSelectedText(),
                newElement = new CKEDITOR.dom.element('a'),
                timeValue = dialog.getValueOf('tab-basic', 'time').split(':');
            newElement.setAttributes({
            	'href': '#',
            	'class': 'time-link',
            	'data-seconds': parseInt(timeValue[0]) * 60 + parseInt(timeValue[1])
            });
            newElement.setText(selectedText);
            editor.insertElement(newElement);
        }
    };
});
