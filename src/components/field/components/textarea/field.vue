<div class="field field-textarea" v-else-if="type === 'textarea'">
    <label class="label ca" :class="classes('label')" :for="name">{{label}}</label>
    <textarea class="textarea" v-on:input="updateModel($event)" :value="model.join('\n')"
         :id="name" :name="name" :placeholder="placeholder" :disabled="disabled">{{model.join('\n')}}</textarea>
    <span class="validation-message help is-danger" :class="{hide: !invalidFieldValue, show: invalidFieldValue}" v-html="validationMessage"></span>
</div>
