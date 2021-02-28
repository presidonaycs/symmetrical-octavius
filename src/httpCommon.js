import axios from 'axios';

var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIzIiwiRmlyc3ROYW1lIjoiQ2h1a3d1bm9uc28iLCJMYXN0TmFtZSI6Ik9yamlha29yIiwiZXhwIjoxNjE0OTY5NDA5LCJpc3MiOiJzZXJ2ZXIiLCJhdWQiOiJjbGllbnQifQ.iH5qkE7NeYICYyWxwvQLXG8PSuvwr4kHPtFhRZpFAgY'
export default axios.create({
      baseURL: 'http://devsvr.edogoverp.com/facility/api/facilityrequest/',
      headers: {
          "content-type" : "application/json",
          'Authorization': `Bearer ${token}`,
          'X-API-Key': "e8q05322dhg429b4f778a4pa7yt562eb37q",
          "Access-Control-Allow-Origin":"http://localhost:3000" 
      }


});
