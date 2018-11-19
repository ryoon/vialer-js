<div class="field field-text">
    <label class="label ca" :class="classes('label')" :for="name">{{label}}</label>
    <div class="control">
        <input type="text" :class="classes('input')"
            :id="name"
            :name="name"
            :value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeholder.capitalize()"
            :disabled="disabled"
            :autofocus="autofocus" />
    </div>
    <em class="help cf" v-if="help">{{help}}</em>
    <span class="validation-message help is-danger" :class="{hide: !invalidFieldValue, show: invalidFieldValue}" v-html="validationMessage"></span>
</div>
