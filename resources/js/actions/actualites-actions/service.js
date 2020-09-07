/*
@
 This file contains the requests ( services )
@
*/

import axios from "axios";
import axiosInstance from "../../config/axios-instance";

function fetchActualitesRequest() {
    let url ="actualities";
  return axiosInstance({
      method: "get",
      url: url
  });
}

const ActualitesServices = {
    fetchActualitesRequest
};

export default ActualitesServices;
