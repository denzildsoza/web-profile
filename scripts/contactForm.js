const formFields = {
  submitted: false,
  invalids: {},
  fields: [
    {
      label: "First name",
      key: "firstName",
      value: "",
      validations: [
        {
          message: "Nice try",
          test: (value) => value.replace(/ /g, ""),
        },
        {
          message: "First name is a required field",
          test: (value) => value,
        },
      ],
    },
    {
      label: "Last name",
      key: "lastName",
      value: "",
      validations: [],
    },
    {
      label: "Email",
      value: "",
      key: "email",
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
    {
        label: "Message",
        value: "",
        key: "message",
        validations: [
          {
            message: "Message is required",
            test: (value) => value,
          },
        ],
      },
  ],
  get isInvalid() {
    return !!Object.values(this.invalids).filter((key) => key).length;
  },
  validate() {
    this.invalids = {};
    // validates all the fields on the current page
    this.fields.forEach((key) => {
      this.validateField(key);
    });
  },
  validateField(fieldKey) {
    console.log(fieldKey);

    this.invalids[fieldKey.key] = false;
    // const field = this.fields[fieldKey];
    // run through each of the fields validation tests
    fieldKey.validations.forEach((validation) => {
      if (!validation.test(fieldKey.value)) {
        this.invalids[fieldKey.key] = validation.message;
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

export default formFields;
