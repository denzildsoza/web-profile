import { nextTick } from "petite-vue";

function FieldComponent(props) {
    return {
      $template: "#field-component-template",
      field: props.field,
      get isInvalid() {
        return props.isInvalid();
      },
      get invalidMessage() {
        return props.invalidMessage();
      },
      // methods
      validate() {
        nextTick(() => {
          if (this.isInvalid) props.validate();
        });
      }
    };
  }

  export default FieldComponent