<div class="field field-select-search" v-else-if="type === 'select-search'" ref="widget">
    <label class="label ca" :class="classes('label')" :for="name">{{label}}</label>
    <div class="control">
        <div v-bind:class="classes('select-search')" v-click-outside="searchToggle">
            <input :id="name" v-model="searchQuery" autocomplete="off" ref="input" :disabled="disabled"
                @click="searchSelect($event, null, null, false)"
                @input="searchSelect($event, null, 'query', false)"
                @focus="searchSelect($event, null, null, false)"
                @keyup.up="searchSelect($event, null, 'up', false)"
                @keyup.down="searchSelect($event, null, 'down', false)"
                @keyup.enter="searchSelect($event, null, 'enter', true)"
                @keyup.escape="searchVisible = false"
                @keyup.page-down="searchSelect($event, null, 'page-down', false)"
                @keyup.page-up="searchSelect($event, null, 'page-up', false)"
                :placeholder="model.id ? model.name : placeholder.capitalize()"/>

            <div class="filtered-options" v-show="searchVisible" ref="options">
                <div :id="`option-${option.id}`" class="option" @click="searchSelect($event, option, null, true)"
                    v-for="option in filteredOptions"
                    :class="{selected: searchSelected.id === option.id}">
                    {{option.name}}
                </div>
            </div>
        </div>
        <slot name="select-extra"></slot>
    </div>
    <em class="help cf" v-if="help">{{help}}</em>
    <span v-if="invalidFieldValue && validationMessage" class="validation-message is-danger" v-html="validationMessage"></span>
    <slot name="select-after"></slot>
</div>
