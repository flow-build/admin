/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';

export const getBlueprintXML = (blueprintSpec) => {
  return {
    type: actionTypes.GET_BLUEPRINT_XML,
    blueprintSpec,
  };
};
