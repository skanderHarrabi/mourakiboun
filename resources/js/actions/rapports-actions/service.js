/*
@
 This file contains the requests ( services )
@
*/

import axios from "axios";
import axiosInstance from "../../config/axios-instance";

function fetchRapportsRequest() {
    let url ="rapports";
  return axiosInstance({
      method: "get",
      url: url
  });
}

const RapportsServices = {
    fetchRapportsRequest
};

export default RapportsServices;
