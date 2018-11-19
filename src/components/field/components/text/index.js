module.exports = (app) => {

    const BaseField = Vue.component('BaseField', require('../base')(app))

    /**
    * @memberof fg.components
    */
    const TextField = {
        extends: BaseField,
        props: {
            value: null,
            placeholder: String,
        },
        // TODO updateModel which touches validation.
        render: templates.field_text.r,
        staticRenderFns: templates.field_text.s,
    }

    return TextField
}
