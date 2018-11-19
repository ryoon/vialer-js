module.exports = (app) => {

    const BaseField = Vue.component('BaseField', require('../base')(app))

    /**
    * @memberof fg.components
    */
    const CheckboxField = {
        extends: BaseField,
        props: {
            value: null,
            placeholder: String,
        },
        render: templates.field_checkbox.r,
        staticRenderFns: templates.field_checkbox.s,
    }

    return CheckboxField
}
