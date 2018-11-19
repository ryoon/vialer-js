<div class="field field-file" v-else-if="type === 'file'">
    <label class="label ca" :for="name">{{label}}</label>
    <input type="file" />
    <span class="validation-message help is-danger" v-html="validationMessage"></span>
    <em class="help cf" v-if="help">{{help}}</em>
</div>
