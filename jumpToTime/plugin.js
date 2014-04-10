CKEDITOR.plugins.add( 'jumpToTime', {
    init: function( editor ) {
        editor.addCommand( 'jumpToTimeDialog', new CKEDITOR.dialogCommand( 'jumpToTimeDialog' ) );
        editor.ui.addButton( 'jumpToTime', {
            label: 'Skok na čas',
            command: 'jumpToTimeDialog',
            toolbar: 'insert',
            icon: this.path + 'images/jumpToTime.png',
        });

        CKEDITOR.dialog.add( 'jumpToTimeDialog', this.path + 'dialogs/jumpToTime.js' );
    }
});