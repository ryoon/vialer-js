<div class="field field-multiselect" v-else-if="type === 'multiselect'">
    <label class="label ca" :class="classes('label')" :for="name">{{label}}</label>
    <div class="control">
        <span class="multi-select">
            <select multiple size=6 class="multi-select" @change="updateModel($event)"
                :id="name" :name="name" :options="options">
                <option v-if="model" :selected="model.includes(option[idfield])" :value="option[idfield]" v-for="option in options">
                    {{$t(option.name)}}
                </option>
            </select>
        </span>
    </div>
    <span v-if="invalidFieldValue" class="validation-message help is-danger" v-html="validationMessage"></span>
    <em class="help cf" v-if="help">{{help}}</em>
</div>
