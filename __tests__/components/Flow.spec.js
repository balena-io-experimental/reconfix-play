// flow of the whole playground, not using real UI components though
import * as cdsl from "balena-cdsl";

// this represents all of the external balena libraries, no matter whether these are existing libraries or not
class Reconfix {
  static getUIForYAMLDSL(dsl) {
    return cdsl.generate_ui(dsl);
  }

  static getListOfTargets(dsl) {
    return ["target1", "target2"];
  }

  static hydrateTargets(dryJson, dsl) {
    return {}; //wet json target data
  }

  static evaluateFormData(unevaluatedDryJson, dsl) {
    return {}; // use temen to evaluate the dry json
  }
}

class PlaygroundUI {
  static renderTextarea(data) {}

  static renderListOfTextAreas(list) {
    // for each item in list -> renderTextArea(item)
  }

  static renderForm(jsonSchema, uiSchema) {}

  static dsl() {
    return DSL;
  }

  static formData(form) {
    // use skhema to validate the data user has filled in against the JSON schema
    return {};
  }

  static targetData() {
    return {
      target1: {
        "wet json field": "wet json field contents"
      },
      target2: {
        "wet json field": "wet json field contents"
      }
    };
  }
}

/* eslint no-unused-vars: "off" */
it("flows synchronously", () => {
  const inputTargets = Reconfix.getListOfTargets(PlaygroundUI.dsl());
  const targetsInputUI = PlaygroundUI.renderListOfTextAreas(inputTargets);
  const targetData = PlaygroundUI.targetData(targetsInputUI);

  const dslInputUI = PlaygroundUI.renderTextarea(DSL);
  const ui = Reconfix.getUIForYAMLDSL(DSL);
  const jsonSchema = ui.json_schema;
  const uiSchema = ui.ui_object;

  const formUI = PlaygroundUI.renderForm(jsonSchema, uiSchema); //with unevaluated expressions
  const formData = PlaygroundUI.formData(formUI); //with unevaluated expressions

  const evaluatedFormData = Reconfix.evaluateFormData(formData, DSL);
  const dryJson = evaluatedFormData;
  const evaluatedFormDataUI = PlaygroundUI.renderTextarea(evaluatedFormData);

  const outputTargets = Reconfix.hydrateTargets(dryJson, DSL);
  const outputTargetsUI = PlaygroundUI.renderListOfTextAreas(outputTargets);
});
/* eslint-enable */

// TODO: cdsl eval support -> should produce schema with '$$eval'
// TODO: ui where when stuff edited the visible link becomes visually broken, e.g. croseed arrow or something

it("validates", () => {
  // dsl  -> form ui, list of targets - both of those validate internally ?
  try {
    const inputTargets = Reconfix.getListOfTargets(PlaygroundUI.dsl());
    const targetsInputUI = PlaygroundUI.renderListOfTextAreas(inputTargets);
    const targetData = PlaygroundUI.targetData(targetsInputUI);

    const dslInputUI = PlaygroundUI.renderTextarea(DSL);
    const ui = Reconfix.getUIForYAMLDSL(DSL);
    const jsonSchema = ui.json_schema;
    const uiSchema = ui.ui_object;
  } catch (dslValidationError) {}

  const formUI = PlaygroundUI.renderForm(jsonSchema, uiSchema); //with unevaluated expressions
  // does its own validation internally, won't proceed further if user data invalid
  const formData = PlaygroundUI.formData(formUI); //with unevaluated expressions

  try {
    const evaluatedFormData = Reconfix.evaluateFormData(formData, DSL);
    const dryJson = evaluatedFormData;
  }
  catch(evaluationError) {
    // e.g. the expression not make sense - where to show this ? - need to integrate
  }

  const evaluatedFormDataUI = PlaygroundUI.renderTextarea(evaluatedFormData);

  const outputTargets = Reconfix.hydrateTargets(dryJson, DSL);
  const outputTargetsUI = PlaygroundUI.renderListOfTextAreas(outputTargets);
});

const DSL = `
version: 1
properties: 
 - a:
    type: string
`;
