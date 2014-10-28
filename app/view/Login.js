/**
 * Created with JetBrains WebStorm.
 * User: demo
 * Date: 10/20/14
 * Time: 1:58 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('ShoesApp.view.Login', {
    extend: 'Ext.Container',
    xtype: 'login-screen',
    requires: [
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.field.Spinner',
        'Ext.field.Radio',
        'Ext.form.FieldSet'
    ],
    config: {
        cls: 'x-login-container',
        itemId: 'loginscreen',
        styleHtmlContent: true,
        scrollable: true,
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                cls: 'x-login-bkg'
            },
            {
                xtype: 'panel',
                itemId: 'shoeapplogo',
                cls: 'shoeapplogo'
            },
            {
                xtype: 'panel',
                itemId: 'shoeappname',
                cls: 'shoeappname',
                html: 'SHOES<span>APP</span>'
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'emailfield',
                        itemId: 'loginPageEmailField',
                        label: 'email',
                        cls: 'email',
//                                        value: 'randomuser@gmail.com',
                        labelWidth: '15%',
                        placeHolder: 'mailid@yourmail.com'
                    },
                    {
                        xtype: 'passwordfield',
                        itemId: 'loginPagePasswordField',
                        label: 'password',
                        cls: 'password',
                        labelWidth: '15%',
                        placeHolder: 'password'
                    },
                    {
                        xtype: 'label',
                        itemId: 'forgotpassword',
                        html: 'Forgot Password?',
                        cls: 'forgotpassword'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'shoesize',
                        labelWidth: '15%',
                        cls: 'shoesize',
                        style: 'color: white;',
                        placeHolder: 'Select shoe size',
                        autoSelect: false,
                        options: [
//                                            {text: 'Select shoe size', value: '-1'},
                            {text: '6', value: '6'},
                            {text: '7', value: '3'},
                            {text: '8', value: '3'},
                            {text: '9', value: '3'},
                            {text: '10', value: '3'},
                            {text: '11', value: '3'},
                            {text: '12', value: '3'},
                            {text: '13', value: '3'},
                            {text: '14', value: '3'},
                            {text: '15', value: '3'}
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginbtn',
                cls: 'loginbtn',
                text: 'SIGN IN'
            }
        ]
    }

}
);


