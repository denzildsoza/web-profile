import { nextTick } from "https://unpkg.com/petite-vue?module";

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
    },
  };
}

const form = {
  // Data
  submitted: false,
  invalids: {},
  fields: {
    firstName: {
      label: "First Name",
      value: "",
      validations: [
        {
          message: "First Name is a required field",
          test: (value) => value,
        },
      ],
    },
    firstName: {
      label: "Last Name",
      value: "",
      validations: [
        {
          message: "Last Name is a required field",
          test: (value) => value,
        },
      ],
    },
    email: {
      label: "Email",
      value: "",
      validations: [
        {
          message: "Must be a valid email address",
          test: (value) => validateEmail(value),
        },
        {
          message: "Email is required",
          test: (value) => value,
        },
      ],
    },
  },

  // Getters
  get currentFields() {
    return this.steps[this.currentStep];
  },

  // Methods

  get isInvalid() {
    return !!Object.values(this.invalids).filter((key) => key).length;
  },
  // methods
  validate() {
    this.invalids = {};
    // validates all the fields on the current page
    this.currentFields.forEach((key) => {
      this.validateField(key);
    });
  },
  validateField(fieldKey) {
    this.invalids[fieldKey] = false;
    const field = this.fields[fieldKey];
    // run through each of the fields validation tests
    field.validations.forEach((validation) => {
      if (!validation.test(field.value)) {
        this.invalids[fieldKey] = validation.message;
      }
    });
  },

  submit() {
    // if form not valid don't submit
    this.validate();
    if (this.isInvalid) return;

    // submit on valid form
    console.log("doing submit", this.fields);
    this.submitted = true;
  },
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default { form, FieldComponent };
