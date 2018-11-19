<div class="field field-color" v-else-if="type === 'color'">
    <label class="label ca" :for="name">{{label}}</label>
    <input class="input" type="color" @change="updateModel($event)"
        v-bind:value="model" :disabled="disabled"/>
</div>
