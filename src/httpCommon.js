import axios from 'axios';

var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxIiwiRmlyc3ROYW1lIjoiRWRvIEdvdiIsIkxhc3ROYW1lIjoiQWRtaW4iLCJleHAiOjE2MTM0NDY3OTksImlzcyI6InNlcnZlciIsImF1ZCI6ImNsaWVudCJ9.zlWEhuNOL3ml3oe0tUKOtP0SdfgU9DknmABLOyMvXbg'
export default axios.create({
      baseURL: 'http://devsvr.edogoverp.com/facility/api/facilityrequest/',
      headers: {
          "content-type" : "application/json",
          'Authorization': `Bearer ${token}`,
          'X-API-Key': "e8q05322dhg429b4f778a4pa7yt562eb37q"
          
      }


});