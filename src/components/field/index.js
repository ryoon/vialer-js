module.exports = (app) => {

    components = {
        TextField: require('./components/text'),
        PasswordField: require('./components/password'),
        CheckboxField: require('./components/checkbox'),
        SelectField: require('./components/select'),
    }

    Object.keys(components).map(function(name) {
        app.components[name] = Vue.component(name, components[name](app))
    });

}
