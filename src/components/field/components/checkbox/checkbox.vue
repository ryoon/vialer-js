<div class="field field-checkbox">
    <input class="switch" type="checkbox"
        :class="css"
        :disabled="disabled"
        :id="name"
        :name="name"
        :checked="value"
        @input="$emit('input', $event.target.checked)" />
    <label :for="name" class="checkbox ca">{{label}}</label>
    <em class="help cf" v-if="help && !invalidFieldValue">{{help}}</em>
    <span v-if="invalidFieldValue" class="validation-message help is-danger"
        v-html="validationMessage">
    </span>
    <slot name="checkbox-extra"></slot>
</div>
