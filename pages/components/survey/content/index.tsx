export const questions = {
  showQuestionNumbers: "off",
  pages: [
    {
      name: "ticket",
      elements: [
        {
          type: "text",
          name: "subject",
          title: "Subject",
          isRequired: true,
        },
        {
          type: "dropdown",
          name: "type",
          title: "Type",
          choices: ["Problems", "Requests", "Inquiry"],
        },
        {
          type: "dropdown",
          name: "source",
          title: "Source",
          choices: ["Problems", "Requests", "Inquiry"],
        },
        {
          type: "dropdown",
          name: "status",
          title: "Status",
          isRequired: true,
          choices: ["Open", "Close"],
        },
        {
          type: "datepicker",
          name: "pick dates",
        },
        {
          type: "editor",
          name: "Description",
        },
        {
          type: "nouislider",
          name: "slidePercentage",
          title: "Some %",
          // isRequired: true,
          rangeMin: 0,
          rangeMax: 1000,
          // You can install and use the wnumb to customize tooltip numbers like this
          //   tooltips: wNumb({
          //     decimals: 0,
          //   }),
        },
      ],
    },
  ],
};
