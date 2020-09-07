/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_RAPPORTS_REQUEST,
  FETCH_RAPPORTS_FAILURE,
  FETCH_RAPPORTS_SUCCESS
} from "./types";

import RapportsServices from "./service";

export function fetchRapports() {
  return async dispatch => {
    dispatch({
      type: FETCH_RAPPORTS_REQUEST
    });
    try {
      const response = await RapportsServices.fetchRapportsRequest();
      await dispatch({
        type: FETCH_RAPPORTS_SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: FETCH_RAPPORTS_FAILURE
      });
    }
  };
}
