module.exports = (app) => {

    const BaseField = Vue.component('BaseField', require('../base')(app))

    /**
    * @memberof fg.components
    */
    const PasswordField = {
        extends: BaseField,
        props: {
            value: null,
            placeholder: String,
        },
        data: function() {
            return {
                visible: false,
            }
        },
        methods: {
            /*
            * Toggles visibility flag on a password field.
            */
            toggleVisible() {
                this.visible = !this.visible
            },
        },
        render: templates.field_password.r,
        staticRenderFns: templates.field_password.s,
    }

    return PasswordField
}
