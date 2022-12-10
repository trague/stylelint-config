module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss", // 开启vue中的检验规则
    "stylelint-config-recess-order",
  ],

  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["apply"],
      },
    ],
  },
};
