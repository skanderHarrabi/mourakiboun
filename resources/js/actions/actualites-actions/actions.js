/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_ACTUALITES_REQUEST,
  FETCH_ACTUALITES_FAILURE,
  FETCH_ACTUALITES_SUCCESS
} from "./types";

import ActualitesServices from "./service";

export function fetchActualities() {
  return async dispatch => {
    dispatch({
      type: FETCH_ACTUALITES_REQUEST
    });
    try {
      const response = await ActualitesServices.fetchActualitesRequest();
      await dispatch({
        type: FETCH_ACTUALITES_SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: FETCH_ACTUALITES_FAILURE
      });
    }
  };
}
